import {Dispatch, SetStateAction, useEffect} from "react";
import {effect} from "@preact/signals-react";
import {DataType} from "../../../types/DataType.ts";
import {fetchedDataSignal} from "../fetched-data-signal.ts";

export const useFetchedData = (setData: Dispatch<SetStateAction<DataType>>) =>{
    useEffect(() => {
        effect(() => {
            const value = fetchedDataSignal.value;
            setData(value);
        })
    }, []);
}