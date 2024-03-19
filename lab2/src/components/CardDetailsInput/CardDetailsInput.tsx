import {useState} from "react";
import {CardDetailsInputState} from "./CardDetailsInputState.ts";
import {checkIfFocused, inputInitialData} from "./helpers.ts";
import CardDetailsElementInput from "../CardDetailsElementInput/CardDetailsElementInput.tsx";
import {handleMouseLeave, handleMouseMove} from "./handlers.ts";
import {CardProps} from "../CardContainer/CardProps.ts";

const CardDetailsInput = (props: CardProps) => {
    const [dataInputState, setDataInputState] = useState<CardDetailsInputState>(inputInitialData());
    return (
        <div
            onMouseMove={(e) => handleMouseMove(e, setDataInputState, props)}
            onMouseLeave={() => handleMouseLeave(setDataInputState, props)}
            className={`${checkIfFocused(dataInputState) ? 'ring-2 ring-black' : ''} relative border rounded-2xl border-add-button h-14.5 items-center flex w-85 mb-4`}>
            <CardDetailsElementInput
                id={'month'}
                title={'місяць'}
                value={props.donorData.month}
                setValue={props.setDonorData}
                state={dataInputState}
                setState={setDataInputState}/>
            <div className="w-0.25 h-input-separator bg-input-separator my-2.5"></div>
            <CardDetailsElementInput
                id={'year'}
                title={'рік'}
                value={props.donorData.year}
                setValue={props.setDonorData}
                state={dataInputState}
                setState={setDataInputState}/>
            <div className="w-0.25 h-input-separator bg-input-separator my-2.5"></div>
            <CardDetailsElementInput
                id={'cvc2'}
                title={'CVC2'}
                value={props.donorData.cvc2}
                setValue={props.setDonorData}
                state={dataInputState}
                setState={setDataInputState}/>
        </div>
    )
}

export default CardDetailsInput;