import {CardProps} from "../CardContainer/CardProps.ts";
import {moneyInputValueSignal} from "../MoneyInput/signals/money-input-value-signal.ts";
import {moneyInputColorSignal} from "../MoneyInput/signals/money-input-color-signal.ts";
import {calcPercentage} from "../Canvas/helpers.ts";
import {checkIfDataValid} from "./helpers.ts";
import {reloadSignal} from "./reloadSignal.ts";

export const handleButtonClick = (props: CardProps) => {
    if (checkIfDataValid(props.donorData, moneyInputValueSignal.value)) {

        let prevMoney = localStorage.getItem('accumulatedMoney');
        if (!prevMoney) prevMoney = "0";

        const inputMoney = moneyInputValueSignal.value;
        const newMoney = (parseInt(prevMoney) + inputMoney) + "";
        localStorage.setItem('accumulatedMoney', newMoney);

        props.setData((prev) => {
            const percentage = calcPercentage(parseInt(newMoney), prev.goal);

            return {
                ...prev,
                accumulatedMoney: parseInt(newMoney),
                jarPercentage: percentage
            }
        })

        console.log({
            accumulatedMoney: inputMoney,
            donorData: props.donorData
        });

        moneyInputValueSignal.value = 0;
        moneyInputColorSignal.value = 'default'

        props.setDonorData((prev) => {
            const newState = {...prev};
            for (const key of Object.keys(prev)) {
                // @ts-ignore
                newState[key] = '';
            }

            return newState;
        })
        reloadSignal.value = reloadSignal.value + 1;
    }
}