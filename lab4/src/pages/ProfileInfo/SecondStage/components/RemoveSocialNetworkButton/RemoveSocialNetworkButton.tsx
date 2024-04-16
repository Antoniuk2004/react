import RemoveSocialNetworkButtonLayout from "./RemoveSocialNetworkButtonLayout.tsx";
import {IoCloseSharp} from "react-icons/io5";

type RemoveSocialNetworkButtonProps = {
    isRemoveButtonVisible: boolean;
    index: number;
}

const RemoveSocialNetworkButton = (props: RemoveSocialNetworkButtonProps) => {
    const {isRemoveButtonVisible, index} = props;

    return (
        <RemoveSocialNetworkButtonLayout
            index={index}
            isRemoveButtonVisible={isRemoveButtonVisible}
        >
            <IoCloseSharp/>
        </RemoveSocialNetworkButtonLayout>
    )
}

export default RemoveSocialNetworkButton;