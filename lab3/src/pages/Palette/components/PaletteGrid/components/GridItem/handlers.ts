import {copyAnimationSignal} from "../../../CopyAnimation/copy-animation-signal.ts";
import {audioSignal} from "../../../../../../audio-signal.ts";
import {formatColor} from "../../../CopyAnimation/helpers.ts";

export const handleMouseClick = (color: string) => {
    const formattedColor = formatColor(color);
    navigator.clipboard.writeText(formattedColor);

    copyAnimationSignal.value = {
        isShown: true,
        colorCode: formattedColor
    }

    if(audioSignal.value){
        audioSignal.value.play();
    }

}