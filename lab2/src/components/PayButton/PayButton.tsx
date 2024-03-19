import {PayButtonType} from "./PayButtonType.ts";
import {handleButtonClick} from "./handlers.ts";

const PayButton = (props: PayButtonType) => {
    return (
        <button
            onClick={() => handleButtonClick(props)}
            className='hover:bg-pay-button duration-200 bg-black h-12 w-85 mb-4 flex justify-center items-center rounded-lg'>
            <img className='h-6.5' src={`/images/${props.src}`} alt={props.src}/>
        </button>
    )
}

export default PayButton;