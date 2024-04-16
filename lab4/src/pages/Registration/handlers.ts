import {formatPhoneNumber} from "./SecondStage/helpers.tsx";

export const handleNumberChange = (event: any, setValue: any) => {
    const newValue = event.currentTarget.value.substring(0, 12);

    if (!newValue) {
        setValue('phoneNumber', '');
        return;
    }

    setValue('phoneNumber', formatPhoneNumber(newValue));
};