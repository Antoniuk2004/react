import FieldLabelLayout from "../../../../common-components/FieldLabelLayout.tsx";
import InputElement from "../../../../common-components/InputElement/InputElement.tsx";
import FieldContainer from "../../../../common-components/FieldContainer.tsx";
import {useFormContext} from "react-hook-form";

const EmailInput = () => {
    const {register} = useFormContext();

    return (
        <FieldContainer>
            <FieldLabelLayout>
                <label>Enter your email</label>
            </FieldLabelLayout>
            <InputElement
                id={'email'}
                register={register}
                type={'email'}
            />
        </FieldContainer>
    )
}

export default EmailInput;