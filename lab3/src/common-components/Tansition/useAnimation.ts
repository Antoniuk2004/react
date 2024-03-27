import {useEffect, useState} from "react";
import {useTransitionSignal} from "./use-transition-signal.ts";
import {effect} from "@preact/signals-react";
import {SlideDirection} from "./SlideDirection.ts";

export const useAnimation = () => {
    const [slideDirection, setSlideDirection] = useState<SlideDirection>(useTransitionSignal.value);

    useEffect(() => {
        effect(() => {
            const value = useTransitionSignal.value;

            if (value === SlideDirection.Left || value === SlideDirection.Right) {
                setSlideDirection(value);
                setTimeout(() => {
                    useTransitionSignal.value = SlideDirection.None;
                    setSlideDirection(SlideDirection.None);
                }, 1000)
            }
        })

    }, []);

    return slideDirection;
}