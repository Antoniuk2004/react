const getJarAmountFromStorage = () => {
    let jarAmount = parseInt(localStorage.getItem("jarAmount"));
    if (!jarAmount) {
        jarAmount = 0;
    }
    receivedData.jarAmount = jarAmount;
}

const inputOwnerData = () => {
    const ownerDataSpan = document.getElementById("owner-data");
    ownerDataSpan.textContent = receivedData.ownerName + " збирає"
}

const inputTitle = () => {
    const titleSpan = document.getElementById("title");
    titleSpan.textContent = receivedData.name;
}


const inputDescription = () => {
    const descriptionElem = document.getElementsByClassName("description-container")[0];

    while (descriptionElem.firstChild) {
        descriptionElem.removeChild(descriptionElem.firstChild);
    }

    const arrOfLines = receivedData.description.split("\n");

    for (const line of arrOfLines) {
        descriptionElem.append(line);
        const brElement = document.createElement("br");
        descriptionElem.append(brElement);
    }
}

const inputJarStats = () => {
    const currencyValue = " ₴";

    const accumulatedElem = document.getElementById("accumulated");
    accumulatedElem.textContent = receivedData.jarAmount / 100 + currencyValue;

    const goalElem = document.getElementById("goal");
    goalElem.textContent = receivedData.jarGoal / 100 + currencyValue;
}

const changeJar = () => {
    const goal = receivedData.jarGoal;
    const amount = receivedData.jarAmount;
    const percent = amount / goal * 100;

    let src = "./images/jar_0.png";
    if (percent > 0 && percent < 33) {
        src = "./images/jar_33.png";
    } else if (percent >= 33 && percent < 100) {
        src = "./images/jar_50.png";
    } else if (percent >= 100) {
        src = "./images/jar_100.png";
    }

    const jarElem = document.getElementById("jar-img");
    jarElem.src = src;
}

const inputGridValues = () => {
    const topValue = receivedData.jarGoal;
    const middleValue = Math.floor(topValue / 2);
    const gridValues = [topValue, middleValue, 0];

    const gridLabelElems = document.getElementsByClassName("grid-label");
    for (let i = 0; i < gridLabelElems.length; i++) {
        gridLabelElems[i].textContent = Math.floor(gridValues[i] / 100);
    }
}

const turnOffSpinner = () => {
    const spinner = document.getElementById("spinner");
    spinner.style.display = "none";

    let elements = Array.from(document.getElementsByClassName("side-element"));
    elements.push(document.getElementsByClassName("footer-holder")[0]);
    for (const element of elements) {
        element.style.display = "flex";
    }
}

const focusOnMoneyInput = () => {
    const moneyInput = document.getElementById("money-input");
    setCursorPosition(moneyInput, 1);
    moneyInput.focus();
}

function setCursorPosition(element, index) {
    const range = document.createRange();
    const sel = window.getSelection();
    const moneyInput = document.getElementById("money-input");
    const contentLength = moneyInput.textContent.trim().length;
    if (contentLength < index) {
        index = contentLength;
    }
    range.setStart(element.childNodes[0], index);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
}

const checkIfValid = (value) => {
    const pattern = /^[0-9]+$/;
    return pattern.test(value);

}

const formatNumber = (num, separate, reverse) => {
    let newNum = "";
    num = num.toString();
    if (!reverse) {
        for (let i = 0; i < num.length; i += separate) {
            newNum += num.substring(i, i + separate);
            if (i !== num.length - 1 && i + 4 < num.length) {
                newNum += " ";
            }
        }
    } else {
        for (let i = num.length; i > 0; i -= separate) {
            newNum = num.substring(i - separate, i) + newNum;
            if (i - separate > 0) {
                newNum = " " + newNum;
            }
        }
    }

    return newNum;
}

const tryToChangeButtonColor = () => {
    const cardPaymentButton = document.getElementsByClassName("card-payment-button")[0];
    const indexOfClassName = cardPaymentButton.className.indexOf(" active-button");
    if (!checkIfCardDataPresent()) {
        if (indexOfClassName !== -1) {
            const className = cardPaymentButton.className;
            cardPaymentButton.className = className.substring(0, indexOfClassName);
        }
        return;
    }

    if (indexOfClassName === -1) {
        cardPaymentButton.className += " active-button";
    }
}

const checkIfCardDataPresent = () => {
    const cardNumberElem = document.getElementById("card-number");
    const cardNumber = cardNumberElem.value.trim().replaceAll(" ", "");
    if (cardNumber.length < 16) return false;

    for (let i = 0; i < 3; i++) {
        const cardDataElem = document.getElementById(`card-data-${i + 1}`);
        const value = cardDataElem.value;
        if (i === 2 && value.length < 3) return false;
        if (value.length < 2) return false;
    }
    return true;
}

const clearData = () => {
    const elements = document.getElementsByTagName("input");
    for (const element of elements) {
        element.value = "";
    }

    const moneyInput = document.getElementById("money-input");
    moneyInput.textContent = "0";

    const idk = document.getElementsByClassName("input-container")[0];
    idk.style.color = "rgba(0, 0, 0, 0.4)";

    const cardPaymentButton = document.getElementsByClassName("card-payment-button")[0];
    const className = cardPaymentButton.className;
    cardPaymentButton.className = className.replace(" active-button", "");

    const labels = document.getElementsByTagName("label");
    for (const label of labels) {
        const className = label.className;
        if (label.id.includes("for-card-data")) {
            label.className = className.replace(" not-empty-bottom", "")
        }
        else{
            label.className = className.replace(" not-empty-top", "")
        }
    }
}

const refreshData = () => {
    clearData();
    getJarAmountFromStorage();
    changeJar();
    inputGridValues();
    inputOwnerData();
    inputTitle();
    inputDescription();
    inputJarStats();
    turnOffSpinner();
    focusOnMoneyInput();
}

refreshData();