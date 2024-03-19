import {Dispatch, MutableRefObject, SetStateAction} from "react";
import {DataType} from "../../types/DataType.ts";

export type RightCanvasProps = {
    moneyInputRef: MutableRefObject<HTMLDivElement | null>
    setData: Dispatch<SetStateAction<DataType>>
}