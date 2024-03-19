import {DonorDataType} from "../DataInput/DonorDataType.ts";
import {replaceAll} from "../DataInput/helpers.ts";

export const checkIfDataValid = (data: DonorDataType, money: number): boolean => {
    if (data.month.length !== 2) return false;
    if (data.year.length !== 2) return false;
    if (data.cvc2.length !== 3) return false;
    if (money < 10) return false;

    const value = data.cardNumber;
    const valueWithoutSpaces = replaceAll(value, ' ', '');
    return valueWithoutSpaces.length === 16;
}