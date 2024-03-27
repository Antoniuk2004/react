import {GridItemProps} from "./GridItemProps.ts";
import {handleMouseClick} from "./handlers.ts";

const GridItem = (props: GridItemProps) => {
    return (
        <div
            className="flex relative justify-end items-end p-2 text-base font-semibold text-gray"
            style={{background: `${props.element.color}`}}>
            <span>{props.element.name}</span>
            <div
                onClick={() => handleMouseClick(props.element.color)}
                className="opacity-0 duration-200 hover:opacity-100  absolute top-0 left-0 w-full h-full flex items-center justify-center cursor-pointer select-none">
                <span
                    className={`uppercase w-25 h-10 flex items-center justify-center rounded-item border-2 border-copy-button`}>copy</span>
            </div>
        </div>
    )
}

export default GridItem;