import {Dispatch, RefObject, SetStateAction, useEffect} from "react";

export const useDropdownBlur = (dropdownRef: RefObject<HTMLDivElement | null>,
                                setIsDropdownOpened: Dispatch<SetStateAction<boolean>>) => {
    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (dropdownRef.current) {
                const rect = dropdownRef.current.getBoundingClientRect();
                const {clientX, clientY} = event;
                if (
                    clientX < rect.left ||
                    clientX > rect.right ||
                    clientY < rect.top ||
                    clientY > rect.bottom
                ) {
                    setIsDropdownOpened(false);
                }
            }
        };

        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);
}

