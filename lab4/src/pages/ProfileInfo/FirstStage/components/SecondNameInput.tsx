import FieldContainer from "../../../../common-components/FieldContainer.tsx";
import FieldLabelLayout from "../../../../common-components/FieldLabelLayout.tsx";
import InputElement from "../../../../common-components/InputElement/InputElement.tsx";
import {useFormContext} from "react-hook-form";

const SecondNameInput = () => {
    const {register} = useFormContext();

    return (
        <FieldContainer>
            <FieldLabelLayout>
                <label>Second name</label>
            </FieldLabelLayout>
            <InputElement
                id={'secondName'}
                register={register}
                type={'text'}
            />
        </FieldContainer>
    )
}

export default SecondNameInput;