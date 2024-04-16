import PhoneNumber from "../../SecondStage/components/PhoneNumber/PhoneNumber.tsx";
import CaptionText from "../../SecondStage/components/CaptionText/CaptionText.tsx";
import IconLayout from "../../../../common-components/IconLayout.tsx";
import {IoMdCheckmark} from "react-icons/io";
import PhoneNumberContentLayout from "../../SecondStage/components/PhoneNumberContent/PhoneNumberContentLayout.tsx";

const ConfirmedNumber = () => {

    return (
        <PhoneNumberContentLayout>
            <PhoneNumber/>
            <CaptionText>
                <IconLayout textSize={"text-lg"} size={"size-4.5"}>
                    <IoMdCheckmark/>
                </IconLayout>
                <span>Number confirmed</span>
            </CaptionText>
        </PhoneNumberContentLayout>
    )
}

export default ConfirmedNumber;