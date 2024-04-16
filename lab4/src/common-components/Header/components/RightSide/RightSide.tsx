import CloseButtonLayout from "../../../CloseButton/CloseButtonLayout.tsx";
import CloseButton from "../../../CloseButton/CloseButton.tsx";
import RightSideLayout from "./RightSideLayout.tsx";

const RightSide = () => {
    return (
        <RightSideLayout>
            <CloseButtonLayout>
                <CloseButton/>
            </CloseButtonLayout>
        </RightSideLayout>
    )
}

export default RightSide;