import InvalidInputLayout from "../../../FirstStage/components/InvalidInput/InvalidInputLayout.tsx";
import InvalidInputDataLayout from "./InvalidInputDataLayout.tsx";

type InvalidInputDataProps = {
    errors: any
}

const InvalidInputData = (props: InvalidInputDataProps) => {
    const {errors} = props;

    if (errors.email)
        return (
            <InvalidInputDataLayout>
                <InvalidInputLayout><span>{errors.email.message}</span></InvalidInputLayout>
            </InvalidInputDataLayout>
        )
    if (errors.password)
        return (
            <InvalidInputDataLayout>
                <InvalidInputLayout><span>{errors.password.message}</span></InvalidInputLayout>
            </InvalidInputDataLayout>
        )
    else return null;
}

export default InvalidInputData;