import {Dispatch, SetStateAction, useEffect} from "react";
import {effect} from "@preact/signals-react";
import {loadSignal} from "../../Loader/load-signal.ts";
import {DataType} from "../../../types/DataType.ts";

export const useLoader = (setLoaded: Dispatch<SetStateAction<boolean>>, data: DataType) => {
    useEffect(() => {
        effect(() => {
                if (Object.values(loadSignal.value).every(value => value)) {
                    setLoaded(true);
                }
            }
        )
    }, [data]);
}