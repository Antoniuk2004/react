import InputElement from "../../../../common-components/InputElement/InputElement.tsx";
import FieldContainer from "../../../../common-components/FieldContainer.tsx";
import {useForm, useFormContext} from "react-hook-form";
import FieldLabelLayout from "../../../../common-components/FieldLabelLayout.tsx";
import {formatZipCode} from "../helpers.ts";

const ZipCodeInput = () => {
    const {register} = useFormContext();

    return (
        <FieldContainer>
            <FieldLabelLayout>
                <label>Zip code</label>
            </FieldLabelLayout>
            <InputElement
                formatZipCode={true}
                id={'zipCode'}
                register={register}
                type={'text'}
            />
        </FieldContainer>
    )
}

export default ZipCodeInput;