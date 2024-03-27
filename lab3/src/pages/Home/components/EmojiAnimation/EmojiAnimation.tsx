import {useState} from "react";
import {useEmoji} from "./use-emoji.ts";

const EmojiAnimation = () => {
    const emojis = ['🤞', '✌️', '🤟', '🖐'];
    const [emojiIndex, setEmojiIndex] = useState(0);
    useEmoji(setEmojiIndex, emojis);

    return (
        <span>{emojis[emojiIndex]}</span>
    )
}

export default EmojiAnimation;