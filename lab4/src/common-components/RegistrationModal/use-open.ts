import {effect, signal} from "@preact/signals-react";
import {useEffect, useState} from "react";

export const isModalOpenSignal = signal(false);

export const useOpenModal = () => {
    let [isOpen, setIsOpen] = useState(isModalOpenSignal.value)

    useEffect(() => {
        effect(() => {
            setIsOpen(isModalOpenSignal.value);
        })
    }, []);

    return {isOpen, setIsOpen};
}