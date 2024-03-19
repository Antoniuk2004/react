import {handleDivInput} from "./handlers.ts";
import {useMoneyInputLoad} from "./use-effects/useMoneyInputLoad.ts";
import {MoneyInputProps} from "./MoneyInputProps.ts";
import {useState} from "react";
import {moneyInputColorSignal} from "./signals/money-input-color-signal.ts";
import {useMoneyUpdate} from "./use-effects/useMoneyUpdate.ts";

const MoneyInput = (props: MoneyInputProps) => {
    const [inputColor, setInputColors] = useState(moneyInputColorSignal.value);
    useMoneyInputLoad(setInputColors);
    useMoneyUpdate(props.moneyInputRef.current);

    return (
        <div
            className={`money-input ${inputColor === 'default' ? 'text-default' : inputColor === 'low' ? 'text-low' : 'text-normal'} py-5 text-5xl flex justify-center items-center gap-x-3`}>
            <div
                ref={props.moneyInputRef}
                onInput={(e) => handleDivInput(e)}
                contentEditable={true}
                inputMode={"decimal"}
                className="focus:outline-0">
            </div>
            <span>₴</span>
        </div>
    )
}
export default MoneyInput;