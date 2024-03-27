import {audioSignal} from "../../../../../../audio-signal.ts";

export const handleButtonClick = () => {
    const val = audioSignal.value;
    if (val) {
        val.volume = val.volume == 1 ? 0 : 1;
    }
}