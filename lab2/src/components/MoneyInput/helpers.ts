import {FormEvent} from "react";
import {moneyInputColorSignal} from "./signals/money-input-color-signal.ts";
import {moneyInputValueSignal} from "./signals/money-input-value-signal.ts";
import {formatNumber, replaceAll} from "../DataInput/helpers.ts";

export const moveCursorToEnd = (moneyInput: HTMLDivElement | null) => {
    if (moneyInput) {
        try {
            const selectionRange = new Range();
            selectionRange.setStart(moneyInput, 1);
            selectionRange.collapse(false);

            const selection = window.getSelection();
            if (!selection) return;

            selection.removeAllRanges();
            selection.addRange(selectionRange);
        } catch (e) {
            console.error(e);
        }
    }
}

export const moveCursorByIndex = (moneyInput: HTMLDivElement | null, index: number) => {
    if (moneyInput) {
        try {
            const selectionRange = new Range();
            selectionRange.setStart(moneyInput.childNodes[0], index); // Set start position to the specified index
            selectionRange.collapse(false);

            const selection = window.getSelection();
            if (!selection) return;

            selection.removeAllRanges();
            selection.addRange(selectionRange);
        } catch (e) {
            console.error(e);
        }
    }
};

export const checkIfDigit = (e: FormEvent<HTMLDivElement>) => {
    const moneyInputValue = e.currentTarget.textContent;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const pressedChar = e.nativeEvent.data;

    const pattern = /^[0-9]/;

    if (moneyInputValue && pressedChar && !pattern.test(pressedChar)) {
        const pressedCharIndex = moneyInputValue.indexOf(pressedChar);
        e.currentTarget.textContent = moneyInputValue.replace(pressedChar, '');
        moveCursorByIndex(e.currentTarget, pressedCharIndex);
        return true;
    }
    return false;
}

export const checkIfNotGreaterThanMax = (e: FormEvent<HTMLDivElement>) => {
    const maxValue = 29999;
    let moneyInputValue = e.currentTarget.textContent;
    if (!moneyInputValue) return;

    moneyInputValue = replaceAll(moneyInputValue, ' ', '');

    if (moneyInputValue && parseInt(moneyInputValue) >= maxValue) {
        moneyInputValueSignal.value = maxValue;
        e.currentTarget.textContent = formatNumber(maxValue + "", 3, true);
        moveCursorToEnd(e.currentTarget);
        return true;
    }
    return false;
}

export const checkIfEmpty = (e: FormEvent<HTMLDivElement>) => {
    const moneyInputValue = e.currentTarget.textContent;
    if (moneyInputValue === '') {
        moneyInputValueSignal.value = 0;
        e.currentTarget.textContent = '0';
        moveCursorToEnd(e.currentTarget);
        moneyInputColorSignal.value = 'low';
        return true;
    }
    return false;
}

export const setValueInNormalWay = (e: FormEvent<HTMLDivElement>) => {
    const moneyInputElement = e.currentTarget;
    let moneyInputValue = moneyInputElement.textContent;
    if (!moneyInputValue) return;

    moneyInputValue = replaceAll(moneyInputValue, ' ', '');

    let newValue;
    if (moneyInputValue[0] === '0') {
        newValue = parseInt(moneyInputValue.slice(1, moneyInputValue.length));
    } else newValue = parseInt(moneyInputValue);

    if (moneyInputValueSignal.value === 0) {
        if (moneyInputValue[1] === '0')
            newValue = parseInt(moneyInputValue.slice(0, 1));
        moneyInputElement.textContent = formatNumber(newValue + "", 3, true);
        moneyInputValueSignal.value = newValue;
    } else {
        moneyInputElement.textContent = formatNumber(newValue + "", 3, true);
        moneyInputValueSignal.value = parseInt(moneyInputValue);
    }
    moveCursorToEnd(moneyInputElement);

    if (newValue < 10) moneyInputColorSignal.value = 'low';
    else moneyInputColorSignal.value = 'normal';
}