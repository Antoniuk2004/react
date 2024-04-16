import InputElement from "../../../../common-components/InputElement/InputElement.tsx";
import FieldContainer from "../../../../common-components/FieldContainer.tsx";
import {useFormContext} from "react-hook-form";
import {FaRegEnvelope} from "react-icons/fa6";
import {appDataSignal} from "../../../../App.tsx";

type EmailInputProps = {
    message: string;
}

const EmailInput = (props: EmailInputProps) => {
    const {message} = props;
    const {register} = useFormContext();

    return (
        <FieldContainer>
            <InputElement
                errorMessage={message}
                LeftIcon={<FaRegEnvelope/>}
                id={'email'}
                register={register}
                type={'email'}
            />
        </FieldContainer>
    )
}

export default EmailInput;