import React, {Dispatch, SetStateAction} from "react";
import {CardDetailsInputState} from "./CardDetailsInputState.ts";
import {CardProps} from "../CardContainer/CardProps.ts";
import {getId} from "./helpers.ts";

export const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>,
                                setDataInputState: Dispatch<SetStateAction<CardDetailsInputState>>,
                                props: CardProps) => {
    const id = getId(e);

    setDataInputState((prev) => {
        const newState = {...prev}
        for (const key of Object.keys(prev)) {
            //@ts-ignore
            if (key === id)
                newState[key] = {
                    //@ts-ignore
                    ...prev[key],
                    shouldBeMoved: true
                }
            else { // @ts-ignore
                if (props.donorData[key] === '')
                    //@ts-ignore
                    newState[key] = {
                        //@ts-ignore
                        ...prev[key],
                        shouldBeMoved: false
                    }
            }
        }

        return newState;
    })
}

export const handleMouseLeave = (setDataInputState: Dispatch<SetStateAction<CardDetailsInputState>>,
                                 props: CardProps) => {
    setDataInputState((prev) => {
        const newState = {...prev};

        for (const key of Object.keys(prev)) {
            // @ts-ignore
            if (props.donorData[key] !== '') continue;

            // @ts-ignore
            if (props.donorData[key] === '') newState[key].shouldBeMoved = false;

        }
        return newState;
    })
    return null;
}