import FieldLabelLayout from "../../../../common-components/FieldLabelLayout.tsx";
import InputElement from "../../../../common-components/InputElement/InputElement.tsx";
import FieldContainer from "../../../../common-components/FieldContainer.tsx";
import {useFormContext} from "react-hook-form";

const FirstNameInput = () => {
    const {register} = useFormContext();

    return (
        <FieldContainer>
            <FieldLabelLayout>
                <label>First name</label>
            </FieldLabelLayout>
            <InputElement
                id={'firstName'}
                register={register}
                type={'text'}
            />
        </FieldContainer>
    )
}

export default FirstNameInput;