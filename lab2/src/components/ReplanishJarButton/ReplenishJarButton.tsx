import {checkIfDataValid} from "./helpers.ts";
import {handleButtonClick} from "./handlers.ts";
import {CardProps} from "../CardContainer/CardProps.ts";
import {useEffect, useState} from "react";
import {moneyInputValueSignal} from "../MoneyInput/signals/money-input-value-signal.ts";
import {effect} from "@preact/signals-react";

const ReplenishJarButton = (props: CardProps) => {
    const [money, setMoney] = useState(moneyInputValueSignal.value);

    useEffect(() => {
        effect(() => {
            setMoney(moneyInputValueSignal.value);
        })
    }, []);

    return (
        <button
            className={`w-full ${checkIfDataValid(props.donorData, money) ? 'cursor-pointer opacity-100' : 'opacity-40 cursor-auto'} rounded-2xl text-white first-letter:uppercase mb-10 h-13.5 bg-red-400`}
            onClick={() => {
                handleButtonClick(props)
            }}
        >поповнити банку
        </button>
    )
}

export default ReplenishJarButton;