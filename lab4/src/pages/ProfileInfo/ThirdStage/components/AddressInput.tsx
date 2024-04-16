import InputElement from "../../../../common-components/InputElement/InputElement.tsx";
import FieldContainer from "../../../../common-components/FieldContainer.tsx";
import {useForm, useFormContext} from "react-hook-form";
import FieldLabelLayout from "../../../../common-components/FieldLabelLayout.tsx";

const AddressInput = () => {
    const {register} = useFormContext();

    return (
        <FieldContainer>
            <FieldLabelLayout>
                <label>Address</label>
            </FieldLabelLayout>
            <InputElement
                id={'address'}
                register={register}
                type={'text'}
            />
        </FieldContainer>
    )
}

export default AddressInput;