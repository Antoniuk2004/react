import {ChangeEvent, Dispatch, SetStateAction} from "react";
import {DonorDataType} from "../DataInput/DonorDataType.ts";
import {checkIfDigit, formatNumber, replaceAll} from "../DataInput/helpers.ts";

export const handleInputChange = (e: ChangeEvent<HTMLInputElement>,
                                  setData: Dispatch<SetStateAction<DonorDataType>>) => {
    const value = e.currentTarget.value;

    const valueWithoutSpaces = replaceAll(value, ' ', '');

    // @ts-ignore
    const char: string = e.nativeEvent.data;
    if (valueWithoutSpaces.length > 16 || !checkIfDigit(char)) {
        e.preventDefault();
        return;
    }


    setData((prev) => ({
        ...prev,
        cardNumber: formatNumber(valueWithoutSpaces, 4, false)
    }))
}