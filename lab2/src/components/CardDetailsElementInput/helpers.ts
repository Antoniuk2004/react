import {CardDetailsElementInputProps} from "./CardDetailsElementInputProps.ts";
import {ChangeEvent} from "react";


export const changeValue = (props: CardDetailsElementInputProps,
                            key: 'shouldBeMoved' | 'isFocused',
                            value: boolean) => {
    const id = props.id;

    props.setState((prev) => ({
        ...prev,
        [id]: {
            ...prev[id],
            [key]: value
        }
    }))
}

export const getNextInput = (e: ChangeEvent<HTMLInputElement>, id: string): HTMLInputElement | null => {
    if (!e.currentTarget.parentElement) return null;
    const parent = e.currentTarget.parentElement.parentElement;
    if (!parent) return null;

    const inputs = [...parent.children].filter((value, index) => index % 2 === 0);

    if (id === 'year') {
        // @ts-ignore
        return inputs[2].firstChild;
    } else if (id === 'month') {
        // @ts-ignore
        return inputs[1].firstChild;
    } else {
        return null;
    }
}

export const checkIfInvalidMessageShouldBeShown = (props: CardDetailsElementInputProps, isFirst: boolean) => {
    if (props.id !== 'cvc2' && !isFirst) {
        return props.value.length !== 2;
    } else if (props.id === 'cvc2' && !isFirst) {
        return props.value.length !== 3;
    }
}