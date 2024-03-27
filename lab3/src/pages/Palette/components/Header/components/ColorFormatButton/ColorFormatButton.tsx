import {IoChevronDownOutline, IoChevronUpOutline} from "react-icons/io5";
import {useRef, useState} from "react";
import {ColorFormatEnum} from "./ColorFormatEnum.ts";
import {handleElementClick} from "./handlers.ts";
import {colorFormatSignal} from "./color-format-signal.ts";
import {useDropdownBlur} from "./useDropdownBlur.ts";

const ColorFormatButton = () => {
    const [isDropdownOpened, setIsDropdownOpened] = useState(false);
    const [colorFormat, setColorFormat] = useState<ColorFormatEnum>(colorFormatSignal.value);
    const dropdownRef = useRef<HTMLDivElement | null>(null)
    useDropdownBlur(dropdownRef, setIsDropdownOpened)

    return (
        <div className="basis-1/3 flex justify-center">
            <div className="h-9 w-67.5 flex flex-col relative select-none">
                <div
                    ref={dropdownRef}
                    onClick={() => setIsDropdownOpened(prev => !prev)}
                    className="flex relative gap-x-1 h-full bg-black rounded-item cursor-pointer items-center justify-center">
                    <span>copy format:</span>
                    <span>{colorFormat}</span>
                    {isDropdownOpened ? <IoChevronDownOutline/> : <IoChevronUpOutline/>}
                </div>
                <ul
                    className={`absolute z-10 top-0 left-0 mt-13 cursor-pointer w-full rounded-item shadow overflow-hidden bg-item ${isDropdownOpened ? '' : 'hidden'}`}>
                    {Object.values(ColorFormatEnum).map((element, index) => (
                        <li
                            onClick={() => handleElementClick(setColorFormat, setIsDropdownOpened, element)}
                            className={`h-8 hover:bg-black duration-200 flex items-center justify-center ${Object.values(ColorFormatEnum).length - 1 === index ? '' : 'border-b border-dark'}`}
                            key={index}>{element}</li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default ColorFormatButton;