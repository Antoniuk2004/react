import {ChangeEvent, Dispatch, SetStateAction} from "react";
import {DonorDataType} from "./DonorDataType.ts";
import {DataInputProps} from "./DataInputProps.ts";
import {DataInputStateType} from "./DataInputStateType.ts";
import {checkIfDigit, formatNumber} from "./helpers.ts";
import {CardNumberInputProps} from "../CardNumberInput/CardNumberInputProps.ts";

export const handleInputChange = (e: ChangeEvent<HTMLInputElement>, setData: Dispatch<SetStateAction<DonorDataType>>) => {
    const value = e.currentTarget.value;
    const id = e.currentTarget.id;

    if (id === 'cardNumber') {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const char: string = e.nativeEvent.data;
        if (value.length > 16 || !checkIfDigit(char)){
            e.preventDefault();
            return;
        }
    }

    console.log(formatNumber(value, 4, false));

    setData((prev) => ({
        ...prev,
        [id]: value
    }))
}

export const handleMouseEnter = (setDataInputState: Dispatch<SetStateAction<DataInputStateType>>) => {
    setDataInputState((prev) => ({
        ...prev,
        shouldBeMoved: true
    }))
}

export const handleMouseLeave = (setDataInputState: Dispatch<SetStateAction<DataInputStateType>>,
                                 props: DataInputProps | CardNumberInputProps) => {
    if (props.donorData[props.id] === '')
        setDataInputState((prev) => ({
            ...prev,
            shouldBeMoved: false
        }))
}

export const handleFocus = (setDataInputState: Dispatch<SetStateAction<DataInputStateType>>) => {
    setDataInputState((prev) => ({
        ...prev,
        focused: true
    }))
}

export const handleBlur = (setDataInputState: Dispatch<SetStateAction<DataInputStateType>>,
                           props: DataInputProps | CardNumberInputProps) => {
    if (props.setIsMessageHidden) props.setIsMessageHidden(false);

    setDataInputState((prev) => ({
        ...prev,
        focused: false
    }))

    setDataInputState((prev) => ({
        ...prev,
        shouldBeMoved: props.donorData[props.id] != ''
    }))
}
