import InvalidInputLayout from "../pages/Registration/FirstStage/components/InvalidInput/InvalidInputLayout.tsx";
import InvalidInputDataLayout
    from "../pages/Registration/ThirdStage/components/InvalidInputData/InvalidInputDataLayout.tsx";

type InvalidInputProps = {
    getMessagesFunc: () => string | null;
}

const InvalidInput = (props: InvalidInputProps) => {
    const {getMessagesFunc} = props;
    const message = getMessagesFunc();

    if (!message) return null;
    return (
        <InvalidInputDataLayout>
            <InvalidInputLayout>{message as string}</InvalidInputLayout>
        </InvalidInputDataLayout>
    )
}

export default InvalidInput;