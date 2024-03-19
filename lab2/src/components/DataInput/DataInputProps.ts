import {DonorDataType} from "./DonorDataType.ts";
import {Dispatch, SetStateAction} from "react";

export type DataInputProps = {
    setIsMessageHidden?: Dispatch<SetStateAction<boolean>>,
    label: string,
    id: 'name' | 'comment' | 'cardNumber',
    donorData: DonorDataType,
    setDonorData: Dispatch<SetStateAction<DonorDataType>>
}