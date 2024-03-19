import {CardProps} from "../CardContainer/CardProps.ts";
import CardDetailsInput from "../CardDetailsInput/CardDetailsInput.tsx";
import ReplenishJarButton from "../ReplanishJarButton/ReplenishJarButton.tsx";
import {useState} from "react";
import CardNumberInput from "../CardNumberInput/CardNumberInput.tsx";
import {replaceAll} from "../DataInput/helpers.ts";
import {useReload} from "../CardDetailsElementInput/useReload.ts";

const CardDetails = (props: CardProps) => {
    const [isMessageHidden, setIsMessageHidden] = useState(true);
    useReload(setIsMessageHidden);

    return (
        <>
            <div className="flex flex-col justify-center relative">
                <CardNumberInput
                    setIsMessageHidden={setIsMessageHidden}
                    id={'cardNumber'}
                    donorData={props.donorData}
                    setDonorData={props.setDonorData}/>
                {replaceAll(props.donorData.cardNumber, ' ', '').length !== 16 && !isMessageHidden ?
                    <span
                        className="text-red-400 ml-4 absolute bottom-0 text-xs font-normal">Введіть номер вашої картки</span>
                    : null}
            </div>
            <CardDetailsInput
                setData={props.setData}
                donorData={props.donorData}
                setDonorData={props.setDonorData}/>
            <ReplenishJarButton
                setData={props.setData}
                donorData={props.donorData}
                setDonorData={props.setDonorData}/>
        </>
    )
}

export default CardDetails;