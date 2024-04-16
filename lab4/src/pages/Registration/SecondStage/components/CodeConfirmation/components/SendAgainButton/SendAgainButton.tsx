import SendAgainButtonLayout from "./SendAgainButtonLayout.tsx";
import {IoMdRefresh} from "react-icons/io";

const SendAgainButton = () => {
    return (
        <SendAgainButtonLayout>
            <IoMdRefresh className="text-2xl"/>
            <span>Send again</span>
        </SendAgainButtonLayout>

    )
}

export default SendAgainButton;