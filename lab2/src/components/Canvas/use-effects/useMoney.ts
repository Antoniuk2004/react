import {useEffect} from "react";
import {fetchedDataSignal} from "../fetched-data-signal.ts";
import {calcPercentage} from "../helpers.ts";

export const useMoney = () => {
    useEffect(() => {
        const dataFromStorage = localStorage.getItem("accumulatedMoney");

        let accumulatedMoney = 0;
        if (!dataFromStorage) localStorage.setItem("accumulatedMoney", 0 + "");
        else accumulatedMoney = parseInt(dataFromStorage);

        const prev = fetchedDataSignal.value;

        const percentage = calcPercentage(accumulatedMoney, prev.goal);

        fetchedDataSignal.value = {
            ...prev,
            accumulatedMoney: accumulatedMoney,
            jarPercentage: percentage
        }
    }, []);
}