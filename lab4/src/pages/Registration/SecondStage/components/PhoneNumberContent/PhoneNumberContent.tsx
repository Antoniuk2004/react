import PhoneNumberContentLayout from "./PhoneNumberContentLayout.tsx";
import PhoneNumber from "../PhoneNumber/PhoneNumber.tsx";
import CaptionText from "../CaptionText/CaptionText.tsx";

const PhoneNumberContent = () => {
    return (
        <PhoneNumberContentLayout>
            <PhoneNumber/>
            <CaptionText>
                <span>Number not confirmed yet</span>
            </CaptionText>
        </PhoneNumberContentLayout>
    )
}

export default PhoneNumberContent;