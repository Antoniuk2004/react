import {useEffect, useState} from "react";
import {isCopyDialogShownSignal} from "./is-copy-dialog-shown-signal.ts";
import {effect} from "@preact/signals-react";

export const useCopyDialogShown = () => {
    const [isCopyDialogShown, setIsCopyDialogShown] = useState(false);

    useEffect(() => {
        effect(() => {
            if (isCopyDialogShownSignal.value) {
                setIsCopyDialogShown(true);

                setTimeout(() => {
                    isCopyDialogShownSignal.value = false;
                }, 3000);
            }
            else setIsCopyDialogShown(false);
        })
    }, []);
    return isCopyDialogShown;
}