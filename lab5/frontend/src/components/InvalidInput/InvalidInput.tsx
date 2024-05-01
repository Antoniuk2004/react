import InvalidInputLayout from "./InvalidInputLayout";

type InvalidInputProps = {
    errors: any;
}

const InvalidInput = (props: InvalidInputProps) => {
    const {errors} = props;

    if(Object.keys(errors).length === 0) return null;
    return (
        <InvalidInputLayout>
            <span>{errors.url.message}</span>
        </InvalidInputLayout>
    )
}

export default InvalidInput;