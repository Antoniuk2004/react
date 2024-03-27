import {Dispatch, SetStateAction, useEffect} from "react";

export const useEmoji = (setEmojiIndex: Dispatch<SetStateAction<number>>, emojis: Array<string>) => {
    useEffect(() => {
        const interval = setInterval(() => {
            setEmojiIndex((prev) => {
                if (prev === emojis.length - 1) {
                    return 0;
                }
                return prev + 1;
            });
        }, 500);

        return () => clearInterval(interval);
    }, []);
}