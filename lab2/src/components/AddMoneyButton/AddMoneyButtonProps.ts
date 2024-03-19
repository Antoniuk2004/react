import {MutableRefObject} from "react";

export type AddMoneyButtonProps = {
    amount: number,
    moneyInputRef: MutableRefObject<HTMLDivElement | null>
}