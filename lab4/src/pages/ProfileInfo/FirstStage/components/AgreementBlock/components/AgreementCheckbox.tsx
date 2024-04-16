import AgreementCheckboxLayout from "./AgreementCheckbox/AgreementCheckboxLayout.tsx";
import {useFormContext} from "react-hook-form";

const AgreementCheckbox = () => {
    const {register} = useFormContext();

    return (
        <AgreementCheckboxLayout>
            <input
                {...register('agreement', {required: true})}
                className="size-6"
                type={"checkbox"}
            />
        </AgreementCheckboxLayout>
    )
}

export default AgreementCheckbox;