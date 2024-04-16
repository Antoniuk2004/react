import FieldLabelLayout from "../../../../common-components/FieldLabelLayout.tsx";
import InputElement from "../../../../common-components/InputElement/InputElement.tsx";
import FieldContainer from "../../../../common-components/FieldContainer.tsx";
import PasswordStrengthLabel from "./PasswordStrengthLabel.tsx";
import {useFormContext} from "react-hook-form";

const PasswordInput = () => {
    const {register, getValues} = useFormContext();

    return (
        <FieldContainer>
            <FieldLabelLayout>
                <label>Set a password</label>
            </FieldLabelLayout>
            <InputElement
                id={'password'}
                register={register}
                type={'password'}
            />
            <PasswordStrengthLabel getValues={getValues}/>
        </FieldContainer>
    );
}

export default PasswordInput;