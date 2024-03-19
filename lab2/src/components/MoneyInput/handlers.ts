import {FormEvent} from "react";
import {checkIfDigit, checkIfEmpty, checkIfNotGreaterThanMax, setValueInNormalWay} from "./helpers.ts";

export const handleDivInput = (e: FormEvent<HTMLDivElement>) => {
    if (checkIfEmpty(e)) return;
    if (checkIfDigit(e)) return;
    if (checkIfNotGreaterThanMax(e)) return;
    setValueInNormalWay(e);
};