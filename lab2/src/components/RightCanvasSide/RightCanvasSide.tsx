import GradientCanvas from "../GradientCanvas/GradientCanvas.tsx";
import {MutableRefObject, useState} from "react";
import DataInput from "../DataInput/DataInput.tsx";
import {DonorDataType} from "../DataInput/DonorDataType.ts";
import {initializeDonorData} from "./initialize-donor-data.ts";
import PayButton from "../PayButton/PayButton.tsx";
import CardContainer from "../CardContainer/CardContainer.tsx";
import {RightCanvasProps} from "./RightCanvasProps.ts";

const RightCanvasSide = (props: RightCanvasProps) => {
    const [donorData, setDonorData] = useState<DonorDataType>(initializeDonorData());

    return (
        <div className="right-canvas-side flex flex-col items-center w-1/2">
            <GradientCanvas moneyInputRef={props.moneyInputRef}/>
            <DataInput
                id={'name'}
                label={'your name (optional)'}
                donorData={donorData}
                setDonorData={setDonorData}/>
            <DataInput
                id={'comment'}
                label={'comment (optional)'}
                donorData={donorData}
                setDonorData={setDonorData}/>
            <PayButton src={'mono_pay.svg'} donorData={donorData} moneyInputRef={props.moneyInputRef}/>
            <PayButton src={'google_pay.svg'} donorData={donorData} moneyInputRef={props.moneyInputRef}/>
            <CardContainer setData={props.setData} donorData={donorData} setDonorData={setDonorData}/>
        </div>
    )
}

export default RightCanvasSide;