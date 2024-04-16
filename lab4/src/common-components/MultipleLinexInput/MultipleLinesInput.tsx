import {MultipleLinesInputProps} from "../../types/MultipleLinesInputProps.ts";
import InputElementLayout from "../InputElement/InputElementLayout.tsx";
import LeftIconLayout from "../InputElement/LeftIconLayout.tsx";
import {handleInput} from "./handlers.ts";

const MultipleLinesInput = (props: MultipleLinesInputProps) => {
    const {id, LeftIcon, setValue} = props;

    return (
        <InputElementLayout height={'h-fit'}>
            {LeftIcon ? <LeftIconLayout>
                {LeftIcon}
            </LeftIconLayout> : null}
            <div
                onInput={(e) => handleInput(e, setValue, id)}
                id={id}
                className={`${LeftIcon ? 'pl-10' : ''}
                px-4 w-full  bg-transparent border-b border-phone-number  py-2 focus:outline-0 focus:border-primary`}
                contentEditable={true}></div
            >
        </InputElementLayout>
    )
}

export default MultipleLinesInput;