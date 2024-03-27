import {ItemProps} from "./item-props.ts";
import {getJustifySelf} from "./helpers.ts";
import {handleItemClick} from "./handlers.ts";
import {useNavigate} from 'react-router-dom';
import {useState} from "react";
import EmojiAnimation from "../EmojiAnimation/EmojiAnimation.tsx";

const Item = (props: ItemProps) => {
    const navigate = useNavigate()
    const [isElementHovered, setIsElementHovered] = useState(false);

    return (
        <a
            onClick={() => handleItemClick(navigate, props.palette)}
            onMouseEnter={() => setIsElementHovered(true)}
            onMouseLeave={() => setIsElementHovered(false)}
            className={`w-fit ${getJustifySelf(props.index, 3)} cursor-pointer bg-item px-3 pt-3 flex flex-col rounded-item overflow-hidden`}>
            <div className="grid grid-cols-5 rounded-item overflow-hidden">
                {props.palette.colors.map((element, index) => (
                    <div
                        style={{background: `${element.color}`}}
                        key={index}
                        className={`w-14 h-9`}
                    ></div>
                ))}
            </div>
            <div className="h-10 flex items-center justify-between w-full text-gray font-semibold">
                <span>{props.palette.paletteName}</span>
                {isElementHovered ? <EmojiAnimation/> : props.palette.emoji}
            </div>
        </a>
    )
}

export default Item;