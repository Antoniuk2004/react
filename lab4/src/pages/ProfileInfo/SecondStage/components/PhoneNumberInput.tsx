import InputElement from "../../../../common-components/InputElement/InputElement.tsx";
import FieldContainer from "../../../../common-components/FieldContainer.tsx";
import {useFormContext} from "react-hook-form";
import {MdLocalPhone} from "react-icons/md";

type PhoneNumberInputProps = {
    message: string;
}

const PhoneNumberInput = (props: PhoneNumberInputProps) => {
    const { message } = props;
    const { register } = useFormContext()

    return (
        <FieldContainer>
            <InputElement
                readOnly={true}
                errorMessage={message}
                LeftIcon={<MdLocalPhone />}
                id={'phoneNumber'}
                register={register}
                type={'text'}
            />
        </FieldContainer>
    )
}

export default PhoneNumberInput;