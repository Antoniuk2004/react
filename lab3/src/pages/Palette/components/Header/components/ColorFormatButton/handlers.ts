import {Dispatch, SetStateAction} from "react";
import {ColorFormatEnum} from "./ColorFormatEnum.ts";
import {colorFormatSignal} from "./color-format-signal.ts";

export const handleElementClick = (setColorFormat: Dispatch<SetStateAction<ColorFormatEnum>>,
                                   setIsDropdownOpened: Dispatch<SetStateAction<boolean>>,
                                   element: ColorFormatEnum) => {
    setColorFormat(element)
    setIsDropdownOpened(false)
    colorFormatSignal.value = element;
}