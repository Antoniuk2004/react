import {DataType} from "./DataType.ts";
import {Dispatch, SetStateAction} from "react";

export type ComponentProps = {
    data: DataType,
    setData: Dispatch<SetStateAction<DataType>>
}