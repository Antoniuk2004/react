import {ChangeEvent} from "react";

export const handleCodeChange = (setValue: any, e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value.substring(0, 4);
    const parsedValue = parseInt(newValue);

    if (isNaN(parsedValue)) {
        setValue('code', '');
        return;
    }

    setValue('code', parsedValue);
}

export const HandleConfirmButtonClick = () => {
    console.log('Confirm button clicked');
}