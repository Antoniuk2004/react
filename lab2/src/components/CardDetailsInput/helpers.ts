import {CardDetailsInputState} from "./CardDetailsInputState.ts";
import React from "react";

export const inputInitialData = (): CardDetailsInputState => {
    return {
        month: {
            isFocused: false,
            shouldBeMoved: false
        },
        year: {
            isFocused: false,
            shouldBeMoved: false
        },
        cvc2: {
            isFocused: false,
            shouldBeMoved: false
        }
    }
}

export const checkIfFocused = (dataInputState: CardDetailsInputState) => {
    for (const value of Object.values(dataInputState)) {
        if (value.isFocused) return true;
    }
    return false;
}

export const getId = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): 'month' | 'year' | 'cvc2' => {
    const rect = e.currentTarget.getBoundingClientRect();
    const oneElementWidth = Math.floor(rect.width / 3 - 1);

    if (e.clientX > rect.left && e.clientX <= rect.left + oneElementWidth) return 'month'
    else if (e.clientX > rect.left + oneElementWidth && e.clientX < rect.left + 2 * oneElementWidth) return 'year'
    else return 'cvc2';
}