import {useEffect, useState} from "react";
import {audioSignal} from "../../../../../../audio-signal.ts";

export const useVolume = () => {
    const [isSoundTurnedOn, setIsSoundTurnedOn] = useState(true);

    useEffect(() => {
        if(audioSignal.value && audioSignal.value.volume === 0){
            setIsSoundTurnedOn(false);
        }

        audioSignal.value?.addEventListener('volumechange', () => {
            if (audioSignal.value) {
                setIsSoundTurnedOn(audioSignal.value.volume === 1)
            }
        })
    }, []);
    return isSoundTurnedOn;
}