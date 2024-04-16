import CodeConfirmationLayout from "./CodeConfirmationLayout.tsx";
import CodeConfirmationField from "./components/CodeConfirmationField/CodeConfirmationField.tsx";
import SendAgainButton from "./components/SendAgainButton/SendAgainButton.tsx";

const CodeConfirmation = () => {
    return (
        <CodeConfirmationLayout>
            <CodeConfirmationField/>
            <SendAgainButton/>
        </CodeConfirmationLayout>
    )
}

export default CodeConfirmation;