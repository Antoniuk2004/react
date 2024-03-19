import {useEffect} from "react";
import {moveCursorToEnd} from "../../MoneyInput/helpers.ts";

export const useMoneyInputFocus = (moneyInput: HTMLDivElement | null, loaded: boolean) => {
    useEffect(() => {
        if(moneyInput && loaded){
            moneyInput.textContent = '0';
            moneyInput.focus();
            moveCursorToEnd(moneyInput);
        }
    }, [loaded]);
}