import {moneyInputValueSignal} from "../MoneyInput/signals/money-input-value-signal.ts";
import {PayButtonType} from "./PayButtonType.ts";
import {fetchedDataSignal} from "../Canvas/fetched-data-signal.ts";
import {removeAnimationAfterTimePeriod} from "./helpers.ts";
import {calcPercentage} from "../Canvas/helpers.ts";
import {moneyInputColorSignal} from "../MoneyInput/signals/money-input-color-signal.ts";

export const handleButtonClick = (props: PayButtonType) => {
    const donorData = props.donorData;
    const value = moneyInputValueSignal.value;
    if (value > 9 && props.moneyInputRef.current) {
        console.log({accumulatedMoney: value, donorData});
        const prev = fetchedDataSignal.value;
        const prevMoney = prev.accumulatedMoney ? prev.accumulatedMoney : 0;
        localStorage.setItem("accumulatedMoney", prevMoney + value + "");
        props.moneyInputRef.current.textContent = '0';
        moneyInputValueSignal.value = 0;
        moneyInputColorSignal.value = 'default';
        // @ts-expect-error
        Object.keys(donorData).map((element) => donorData[element] = '');

        fetchedDataSignal.value = {
            ...prev,
            accumulatedMoney: prevMoney + value,
            jarPercentage: calcPercentage(prevMoney + value, prev.goal)
        }
    } else if (props.moneyInputRef.current) {
        const moneyInputContainer = props.moneyInputRef.current.parentElement
        if(!moneyInputContainer) return;
        const animation = 'shake';
        moneyInputContainer.className += ` ${animation} `;
        removeAnimationAfterTimePeriod(moneyInputContainer, 500, animation);
    }
}