import Splitter from "../Splitter/Splitter.tsx";
import {useState} from "react";
import CardDetails from "../CardDetails/CardDetails.tsx";
import {CardProps} from "./CardProps.ts";

const CardContainer = (props: CardProps) => {
    const [isCardContainerOpened, setIsCardContainerOpened] = useState(false);

    return (
        <div className="w-85 flex flex-col items-center">
            <Splitter isCardContainerOpened={isCardContainerOpened}/>
            {isCardContainerOpened ?
                <CardDetails
                    setData={props.setData}
                    donorData={props.donorData}
                    setDonorData={props.setDonorData}/>
                :
                <div className='text-red-500 cursor-pointer flex items-center gap-x-2 mt-2 font-semibold text-sm'>
                    <img src="/images/card.svg" alt="card"/>
                    <span onClick={() => setIsCardContainerOpened(true)}>Оплатити картою</span>
                </div>
            }
        </div>
    )
}

export default CardContainer;