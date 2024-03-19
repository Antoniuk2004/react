import {CardDetailsInputState} from "../CardDetailsInput/CardDetailsInputState.ts";
import {Dispatch, SetStateAction} from "react";
import {DonorDataType} from "../DataInput/DonorDataType.ts";

export type CardDetailsElementInputProps = {
    id: 'month' | 'year' | 'cvc2'
    title: string,
    value: string,
    setValue: Dispatch<SetStateAction<DonorDataType>>
    state: CardDetailsInputState,
    setState: Dispatch<SetStateAction<CardDetailsInputState>>
}