import {IoMdCheckmark} from "react-icons/io";
import {PasswordStrength} from "../helpers.ts";
import {MdClose} from "react-icons/md";

type PasswordStrengthEmojiProps = {
    strength: PasswordStrength
}

const PasswordStrengthEmoji = (props: PasswordStrengthEmojiProps) => {
    const {strength} = props;

    switch (strength) {
        case PasswordStrength.Good:
            return <IoMdCheckmark/>;
        case PasswordStrength.Bad:
            return <MdClose />;
        default:
            return null;
    }
}

export default PasswordStrengthEmoji;