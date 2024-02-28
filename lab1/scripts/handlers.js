const handleMoneyInputKeyPress = (event) => {
    const pressedKey = event.key;
    if (!checkIfValid(pressedKey)) {
        event.preventDefault();
        return;
    }

    const textContent = event.target.textContent.trim().replaceAll(" ", "");
    const limit = receivedData.limit / 100;
    const value = textContent + pressedKey;
    if (parseInt(value) < 10) event.target.parentElement.style.color = "rgba(179, 9, 82, 0.4)";
    else event.target.parentElement.style.color = "black";

    if (value > limit) {
        const newNum = formatNumber(receivedData.limit / 100, 3, true);
        event.target.textContent = newNum;
        setCursorPosition(event.currentTarget, newNum.length);
        event.preventDefault();
        return;
    }

    if (textContent === '0') {
        event.target.textContent = pressedKey;
        setCursorPosition(event.currentTarget, 1);
        event.preventDefault();
        return;
    }

    const newNum = formatNumber(value, 3, true);
    event.target.textContent = newNum;
    setCursorPosition(event.currentTarget, newNum.trim().length);
    event.preventDefault();
}

const handleMoneyInputDataInput = (event) => {
    const value = event.target.textContent;
    const num = value.trim().replaceAll(" ", "");
    if (!event.data && num.length > 1) {
        event.target.textContent = formatNumber(num, 3, true);
        setCursorPosition(event.currentTarget, event.target.textContent.length);
    }

    if (parseInt(num) < 10) event.target.parentElement.style.color = "rgba(179, 9, 82, 0.4)";
    else event.target.parentElement.style.color = "black";

    if (!event.data && num.length === 0) {
        event.currentTarget.textContent = 0;
        event.target.parentElement.style.color = "rgba(179, 9, 82, 0.4)";
        setCursorPosition(event.currentTarget, 1);
    }
}


const handleInputFocus = (event) => {
    const className = event.target.className;
    const id = event.target.id;
    let inputContainer = document.getElementById(id).parentElement;
    if (className.includes("card-data-input")) {
        inputContainer = inputContainer.parentElement;
    }
    inputContainer.style.boxShadow = "0 0 0 2px #000";
}

const handleInputBlur = (event) => {
    const className = event.target.className;
    const id = event.target.id;
    let inputContainer = document.getElementById(id).parentElement;
    if (className.includes("card-data-input")) {
        inputContainer = inputContainer.parentElement;
    }
    inputContainer.style.boxShadow = "";
}

const handleTextInput = (event) => {
    const data = event.data;
    const content = event.target.value;
    let additionalClassName = " not-empty-top";
    const parentClassName = event.target.parentElement.className;
    if (parentClassName === "card-input-container") {
        additionalClassName = " not-empty-bottom";
    }

    if (data && content.length === 1) {
        const labelElem = event.target.nextSibling.nextSibling;
        labelElem.className += additionalClassName;
    }
    if (content.length === 0) {
        const labelElem = event.target.nextSibling.nextSibling;
        const className = labelElem.className;
        labelElem.className = className.replace(additionalClassName, "");
    }
}

const handleCardInputButtonClick = (event) => {
    const buttonContainer = event.target.parentElement;
    buttonContainer.style.display = "none";

    const cardPaymentContainer = document.getElementsByClassName("card-payment-container")[0];
    cardPaymentContainer.style.display = "flex";

    const separator = document.getElementsByClassName("separator")[0];
    separator.style.margin = "24px 0";

    const separatorLabel = separator.children[0];
    separatorLabel.style.display = "flex";
}

const handleAddMoneyButtonClick = (event) => {
    const id = event.currentTarget.id;
    const indexOfCurrencyVal = id.indexOf("uah");

    const moneyToAdd = parseInt(id.substring(0, indexOfCurrencyVal));
    const moneyInputElem = document.getElementById("money-input");
    const inputMoney = parseInt(moneyInputElem.textContent.trim().replaceAll(" ", ""));
    if (inputMoney + moneyToAdd < receivedData.limit / 100) {
        moneyInputElem.parentElement.style.color = "black";
        moneyInputElem.textContent = formatNumber(inputMoney + moneyToAdd, 3, true);
    } else {
        moneyInputElem.textContent = formatNumber(receivedData.limit / 100, 3, true);
    }
}

const handleCardNumberInput = (event) => {
    tryToChangeButtonColor();
    handleTextInput(event);

    const data = event.data;
    if (!data) {
        const value = event.currentTarget.value;
        if (value[value.length - 1] === " ") {
            event.currentTarget.value = value.substring(0, value.length - 1);
        }
        return;
    }

    let value = event.currentTarget.value.replaceAll(" ", "").trim().toString();
    if (!checkIfValid(data)) {
        event.currentTarget.value = value.substring(0, value.length - 1);
        return;
    } else if (value.length > 16) {
        value = event.currentTarget.value;
        event.currentTarget.value = value.substring(0, value.length - 1);
        return;
    }

    event.currentTarget.value = formatNumber(value, 4, false);
}

const handleCardInfoInput = (event) => {
    handleTextInput(event);
    tryToChangeButtonColor();

    const data = event.data;
    const value = event.target.value.toString();
    if (!checkIfValid(data) && data) {
        event.currentTarget.value = value.substring(0, value.length - 1);
        return;
    }

    const id = parseInt(event.target.id.replace("card-data-", ""));
    if (id === 3 && value.length > 3) {
        event.currentTarget.value = value.substring(0, value.length - 1);
    }

    const nextInput = document.getElementById(`card-data-${id + 1}`);
    if (value.length === 2 && id !== 3) {
        if (nextInput.value.length === 0) {
            nextInput.focus()
        }
    }

    if (value.length > 2 && id !== 3) {
        event.currentTarget.value = value.substring(0, value.length - 1);
        if (nextInput.value.length === 0) {
            nextInput.value = data;
            const label = nextInput.nextSibling.nextSibling;
            label.className += " not-empty-bottom";
        }
    }

    if (id === 1 && parseInt(value) > 12) {
        event.currentTarget.value = 12;
    }
}

const handlePayButtonClick = (event) => {
    const className = event.target.className;
    if (className.includes("card-payment-button")) {
        if (!checkIfCardDataPresent()) return;
        dataToSend.cardNumber = document.getElementById("card-number").value;
        dataToSend.expirationMonth = document.getElementById("card-data-1").value;
        dataToSend.expirationYear = document.getElementById("card-data-2").value;
        dataToSend.cvc2 = document.getElementById("card-data-3").value;
    }

    if (!checkMoney()) return;
    dataToSend.cardHolder = document.getElementById("card-holder").value;
    dataToSend.paymentComment = document.getElementById("payment-comment").value;

    console.log(dataToSend);
    refreshData();
}