import {useEffect, useState} from "react";
import { dialCodesRequest } from "../../../api/dial-codes-request.ts";

export const useDialCodes = () => {
    const [dialCodes, setDialCodes] = useState<string[]>([]);

    useEffect(() => {
        dialCodesRequest().then((data) => {
            if (!data) return;

            setDialCodes(data);
        })
    }, []);

    return dialCodes;
}