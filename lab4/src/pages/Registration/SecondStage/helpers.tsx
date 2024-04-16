import {appDataSignal} from "../../../App.tsx";

export const getPhoneNumber = () => {
    const value = appDataSignal.value.phoneNumber;
    if(!value) return '';

    const number = formatPhoneNumber(value);

    return `${appDataSignal.value.dialCode} ${number}`;
}

export const formatPhoneNumber = (phoneNumber: string): string => {
    const cleanedNumber = phoneNumber.replace(/\D/g, '');

    let formattedNumber = '';

    if (cleanedNumber.length <= 3) {
        formattedNumber = cleanedNumber;
    } else if (cleanedNumber.length <= 6) {
        formattedNumber = `${cleanedNumber.substring(0, 3)} ${cleanedNumber.substring(3)}`;
    } else {
        formattedNumber = `${cleanedNumber.substring(0, 3)} ${cleanedNumber.substring(3, 6)}-${cleanedNumber.substring(6, 10)}`;
    }

    return formattedNumber.trim();
};
