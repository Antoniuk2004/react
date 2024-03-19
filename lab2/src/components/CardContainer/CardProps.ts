import {DonorDataType} from "../DataInput/DonorDataType.ts";
import {Dispatch, SetStateAction} from "react";
import {DataType} from "../../types/DataType.ts";

export type CardProps = {
    donorData : DonorDataType, 
    setDonorData: Dispatch<SetStateAction<DonorDataType>>,
    setData: Dispatch<SetStateAction<DataType>>
}