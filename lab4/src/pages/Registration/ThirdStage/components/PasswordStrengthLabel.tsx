import IconLayout from "../../../../common-components/IconLayout.tsx";
import CaptionText from "../../SecondStage/components/CaptionText/CaptionText.tsx";
import {usePasswordStrength} from "../use-effects/use-password-strength.ts";
import {getStrengthTextColor, PasswordStrength} from "../helpers.ts";
import PasswordStrengthEmoji from "./PasswordStrengthEmoji.tsx";

type PasswordStrengthLabelProps = {
    getValues: any
}

const PasswordStrengthLabel = (props: PasswordStrengthLabelProps) => {
    const {getValues} = props;
    const strength = usePasswordStrength(getValues);

    if(strength === PasswordStrength.None) return null;
    return (
        <CaptionText text={getStrengthTextColor(strength)}>
            <IconLayout textSize={"text-lg"} size={"size-4.5"}>
                <PasswordStrengthEmoji strength={strength}/>
            </IconLayout>
            <span>{PasswordStrength[strength]} password</span>
        </CaptionText>
    )
}

export default PasswordStrengthLabel;