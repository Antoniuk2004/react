import CodeConfirmationFieldLayout from "./ConfirmationFieldLayout.tsx";
import CodeConfirmationLabel from "../CodeConfirmationLabel/CodeConfirmationLabel.tsx";
import CodeInput from "../CodeInput/CodeInput.tsx";
import CaptionText from "../CaptionText/CaptionText.tsx";

const CodeConfirmationField = () => {
    return (
        <CodeConfirmationFieldLayout>
            <CodeConfirmationLabel/>
            <CodeInput/>
            <CaptionText/>
        </CodeConfirmationFieldLayout>
    )
}

export default CodeConfirmationField;