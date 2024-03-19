import {AddMoneyButtonProps} from "./AddMoneyButtonProps.ts";
import {moneyInputColorSignal} from "../MoneyInput/signals/money-input-color-signal.ts";
import {moneyInputValueSignal} from "../MoneyInput/signals/money-input-value-signal.ts";
import {formatNumber} from "../DataInput/helpers.ts";

export const handleButtonClick = (AddMoneyButtonProps: AddMoneyButtonProps) => {
    const {amount, moneyInputRef} = AddMoneyButtonProps;

    moneyInputColorSignal.value = 'normal';

    const maxValue = 29999;
    let newAmount = moneyInputValueSignal.value + amount;
    newAmount = newAmount > maxValue ? maxValue : newAmount;

    if (!moneyInputRef.current) return;
    moneyInputRef.current.blur();
    moneyInputRef.current.textContent = formatNumber(newAmount + "", 3, true);
    moneyInputValueSignal.value = newAmount;
}