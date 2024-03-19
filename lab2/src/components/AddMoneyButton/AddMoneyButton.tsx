import {AddMoneyButtonProps} from "./AddMoneyButtonProps.ts";
import {handleButtonClick} from "./handlers.ts";

const AddMoneyButton = (props: AddMoneyButtonProps) => {
    return (
        <button
            onClick={() => handleButtonClick(props)}
            className="hover:bg-add-button duration-200 basis-1/3 border rounded-2xl py-2 border-add-button text-base font-medium"
        >+{props.amount} ₴</button>
    )
}

export default AddMoneyButton;