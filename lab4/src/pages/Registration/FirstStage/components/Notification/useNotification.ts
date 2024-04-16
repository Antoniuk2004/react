import {useEffect, useState} from "react";
import {effect, signal} from "@preact/signals-react";

export const notificationSignal = signal<boolean>(true);

export const useNotification = () => {
    const [isVisible, setIsVisible] = useState<boolean>(notificationSignal.value);

    useEffect(() => {
        effect(() => {
            setIsVisible(notificationSignal.value);
        })
    }, []);

    return isVisible;
}