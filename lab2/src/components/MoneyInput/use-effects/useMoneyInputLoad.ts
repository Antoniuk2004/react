import {Dispatch, SetStateAction, useEffect} from "react";
import {loadSignal} from "../../Loader/load-signal.ts";
import {effect} from "@preact/signals-react";
import {moneyInputColorSignal} from "../signals/money-input-color-signal.ts";

export const useMoneyInputLoad = (setInputColors: Dispatch<SetStateAction<string>>) => {
    useEffect(() => {
        loadSignal.value.moneyInput = true;

        effect(() => {
            setInputColors(moneyInputColorSignal.value);
        })
    }, []);
}