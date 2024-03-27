import {IoMdArrowRoundBack} from "react-icons/io";
import {handleButtonClick} from "./handlers.ts";

const BackButton = (props: { navigate: any }) => {

    return (
        <div className="basis-1/3">
            <button
                onClick={() => handleButtonClick(props.navigate)}
                className="flex capitalize items-center gap-x-1">
                <IoMdArrowRoundBack/>
                <span>back</span>
            </button>
        </div>
    )
}

export default BackButton;