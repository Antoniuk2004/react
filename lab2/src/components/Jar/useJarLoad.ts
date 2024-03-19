import {useLayoutEffect} from "react";
import {loadSignal} from "../Loader/load-signal.ts";
import {DataType} from "../../types/DataType.ts";

export const useJarLoad = (data: DataType) => {
    useLayoutEffect(() => {
        if (data.jarPercentage !== null) {
            loadSignal.value.jar = true;
        }
    }, [data.jarPercentage]);
}