import {DonorDataType} from "../DataInput/DonorDataType.ts";
import {Dispatch, MutableRefObject, SetStateAction} from "react";
import {DataType} from "../../types/DataType.ts";

export type PayButtonType = {
    src: string,
    donorData: DonorDataType,
    moneyInputRef: MutableRefObject<HTMLDivElement | null>,
    setData: Dispatch<SetStateAction<DataType>>
}