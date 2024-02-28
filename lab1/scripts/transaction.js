const checkMoney = () => {
    const moneyInputElem = document.getElementById("money-input");
    const money = parseInt(moneyInputElem.textContent.trim().replaceAll(" ", ""));

    if (money < 10) {
        const moneyInputContainer = moneyInputElem.parentElement;
        const className = moneyInputContainer.className
        moneyInputContainer.className = className.replace(" shake", "");
        moneyInputContainer.className += " shake";

        setTimeout(() => {
            moneyInputContainer.className = className.replace(" shake", "");

        }, 500);
        return false;
    }

    console.log(money * 100);
    dataToSend.donationMoney = money * 100;
    const newValue = parseInt(dataToSend.donationMoney) + parseInt(receivedData.jarAmount);
    localStorage.setItem("jarAmount", `${newValue}`);
    return true;
}