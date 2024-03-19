import {Dispatch, SetStateAction, useEffect} from "react";
import {reloadSignal} from "../ReplanishJarButton/reloadSignal.ts";

export const useReload = (setIsFirst: Dispatch<SetStateAction<boolean>>) => {
    useEffect(() => {
        setIsFirst(true);
    }, [reloadSignal.value]);
}