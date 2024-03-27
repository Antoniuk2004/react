import {useEffect, useState} from "react";
import {effect} from "@preact/signals-react";
import {copyAnimationSignal} from "./copy-animation-signal.ts";
import {CopyAnimationProps} from "./copy-animation-props.ts";

export const
    useCopyAnimation = () => {
        const [animation, setAnimation] = useState<CopyAnimationProps>(copyAnimationSignal.value);

        useEffect(() => {
            effect(() => {
                setAnimation(copyAnimationSignal.value);

                if (copyAnimationSignal.value.isShown) {
                    setTimeout(() => {
                        copyAnimationSignal.value.isShown = false;
                        setAnimation((prev) => ({
                            ...prev,
                            isShown: false
                        }));
                    }, 2000);
                }
            })
        }, []);

        return animation;
    }