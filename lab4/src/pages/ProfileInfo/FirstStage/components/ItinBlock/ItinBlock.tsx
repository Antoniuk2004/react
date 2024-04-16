import PhoneNumberContentLayout
    from "../../../../Registration/SecondStage/components/PhoneNumberContent/PhoneNumberContentLayout.tsx";
import CaptionText from "../../../../Registration/SecondStage/components/CaptionText/CaptionText.tsx";
import IconLayout from "../../../../../common-components/IconLayout.tsx";
import {IoMdCheckmark} from "react-icons/io";
import PhoneNumberContainer from "../../../../../common-components/PhoneNumberContainer.tsx";
import PhoneNumberLayout from "../../../../Registration/SecondStage/components/PhoneNumber/PhoneNumberLayout.tsx";
import {getItin} from "../../helpers.ts";

const ItinBlock = () => {
    return (
        <PhoneNumberContainer>
            <PhoneNumberContentLayout>
                <PhoneNumberLayout>
                    <span>{getItin()}</span>
                </PhoneNumberLayout>
                <CaptionText>
                    <IconLayout textSize={"text-lg"} size={"size-4.5"}>
                        <IoMdCheckmark/>
                    </IconLayout>
                    <span>Your ITIN</span>
                </CaptionText>
            </PhoneNumberContentLayout>
        </PhoneNumberContainer>
    )
}

export default ItinBlock;