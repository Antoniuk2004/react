import {useEffect} from "react";
import {effect} from "@preact/signals-react";
import {moneyInputValueSignal} from "../signals/money-input-value-signal.ts";
import {formatNumber} from "../../DataInput/helpers.ts";

export const useMoneyUpdate = (input: HTMLDivElement | null) => {
    useEffect(() => {
        effect(() => {
            if(!input) return;

            input.textContent = formatNumber(moneyInputValueSignal.value + "", 3, true);

        })
    }, [moneyInputValueSignal.value]);
}