import {CardDetailsElementInputProps} from "./CardDetailsElementInputProps.ts";
import {handleBlur, handleFocus, handleInputChange, handleMouseLeave} from "./handlers.ts";
import {useState} from "react";
import {checkIfInvalidMessageShouldBeShown} from "./helpers.ts";
import {useReload} from "./useReload.ts";

const CardDetailsElementInput = (props: CardDetailsElementInputProps) => {
    const state = props.state[props.id];
    const [isFirst, setIsFirst] = useState(true);
    useReload(setIsFirst);

    return (
        <div className='relative w-1/3 h-full flex items-center'>
            <input
                onChange={(e) => handleInputChange(e, props)}
                autoComplete={'off'}
                value={props.value}
                onFocus={() => handleFocus(props)}
                onBlur={() => handleBlur(props, setIsFirst)}
                onMouseLeave={() => handleMouseLeave(props)}
                className="w-full rounded-full px-4 focus:outline-0 h-full px-4focus:outline-0" id={'card-details'}
                type="text"/>
            <label
                className={`${state.shouldBeMoved || state.isFocused ? '-translate-y-4 text-xs' : ''} duration-200 left-4 capitalize font-normal opacity-60 absolute`}
                htmlFor={'card-details'}>{props.title}</label>
            {checkIfInvalidMessageShouldBeShown(props, isFirst) ?
                <span className="absolute -bottom-[16px] text-red-400 ml-4 text-xs font-normal">Недійсно</span>
                : null}
        </div>
    )
}

export default CardDetailsElementInput;