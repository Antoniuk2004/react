import FieldLabelLayout from "../../../../common-components/FieldLabelLayout.tsx";
import FieldContainer from "../../../../common-components/FieldContainer.tsx";
import MultipleLinesInput from "../../../../common-components/MultipleLinexInput/MultipleLinesInput.tsx";
import {useFormContext} from "react-hook-form";

const OptionalInput = () => {
    const {setValue} = useFormContext();

    return (
        <FieldContainer>
            <FieldLabelLayout>
                <label>Optional</label>
            </FieldLabelLayout>
            <MultipleLinesInput
                setValue={setValue}
                id={"optional"}
            />
        </FieldContainer>
    )
}

export default OptionalInput;