import {Dispatch, SetStateAction} from "react";
import {DonorDataType} from "../DataInput/DonorDataType.ts";

export type  CardNumberInputProps = {
    setIsMessageHidden?: Dispatch<SetStateAction<boolean>>,
    id: 'name' | 'comment' | 'cardNumber',
    donorData: DonorDataType,
    setDonorData: Dispatch<SetStateAction<DonorDataType>>
}