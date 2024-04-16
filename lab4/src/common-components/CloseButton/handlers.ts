import {appDataSignal} from "../../App.tsx";
import {initialAppValues} from "../../utils/initial-app-values.ts";

export const handleCloseButtonClick = (navigate: any) => {
    appDataSignal.value = initialAppValues;
    navigate('/');
}