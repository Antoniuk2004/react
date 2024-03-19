import {ChangeEvent, Dispatch, SetStateAction} from "react";
import {CardDetailsElementInputProps} from "./CardDetailsElementInputProps.ts";
import {changeValue, getNextInput} from "./helpers.ts";
import {checkIfDigit} from "../DataInput/helpers.ts";

export const handleInputChange = (e: ChangeEvent<HTMLInputElement>, props: CardDetailsElementInputProps) => {
    const id = props.id;
    let value = e.currentTarget.value;

    // @ts-ignore
    const char = e.nativeEvent.data;
    if (!(checkIfDigit(char))) return;

    if (id === 'month' && parseInt(value) > 12) value = 12 + "";
    if (id === 'cvc2' && value.length > 3) return;
    if (id !== 'cvc2' && value.length > 2) return;

    props.setValue((prev) => ({
        ...prev,
        [id]: value
    }))

    if (id !== 'cvc2' && value.length === 2) {
        const nextInput = getNextInput(e, props.id);
        if (nextInput) nextInput.focus();
    }
}

export const handleFocus = (props: CardDetailsElementInputProps) => {
    changeValue(props, 'shouldBeMoved', true);
    changeValue(props, 'isFocused', true);
}

export const handleBlur = (props: CardDetailsElementInputProps,
                           setIsFirst: Dispatch<SetStateAction<boolean>>) => {
    setIsFirst(false);
    changeValue(props, 'isFocused', false);
}

export const handleMouseLeave = (props: CardDetailsElementInputProps) => {
    if (props.value === '') {
        changeValue(props, 'shouldBeMoved', false);
    }
}