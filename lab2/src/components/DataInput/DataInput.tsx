import {DataInputProps} from "./DataInputProps.ts";
import {
    handleMouseLeave,
    handleMouseEnter,
    handleFocus,
    handleBlur, handleInputChange,
} from "./handlers.ts";
import {useState} from "react";
import {DataInputStateType} from "./DataInputStateType.ts";

const DataInput = (props: DataInputProps) => {
    const [dataInputState, setDataInputState] = useState<DataInputStateType>({shouldBeMoved: false, focused: false});

    return (
        <div
            onMouseEnter={() => handleMouseEnter(setDataInputState)}
            onMouseLeave={() => handleMouseLeave(setDataInputState, props)}
            className={`${dataInputState.focused ? 'ring-2 ring-black' : ''} relative overflow-hidden border rounded-2xl border-add-button h-14.5 items-center flex w-85 mb-4`}>
            <input
                autoComplete={'off'}
                value={props.donorData[props.id]}
                onFocus={() => handleFocus(setDataInputState)}
                onChange={(e) => handleInputChange(e, props.setDonorData)}
                onBlur={() => handleBlur(setDataInputState, props)}
                className="w-full px-4 h-full focus:outline-0" id={props.id} type="text"/>
            <label
                className={`${dataInputState.shouldBeMoved || dataInputState.focused ? '-translate-y-4 text-xs' : ''} duration-200 left-4 first-letter:uppercase font-normal opacity-60 absolute`}
                htmlFor={props.id}>{props.label}</label>
        </div>
    )
}

export default DataInput;