import {signal} from "@preact/signals-react";
import {CopyAnimationProps} from "./copy-animation-props.ts";

export const copyAnimationSignal = signal<CopyAnimationProps>({
    isShown: false,
    colorCode: ''
});