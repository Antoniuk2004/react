import {useForm, SubmitHandler, FormProvider} from "react-hook-form";
import InvalidInput from "./InvalidInput.tsx";
import {LayoutProps} from "../../../../types/LayoutProps.ts";
import {appDataSignal} from "../../../../App.tsx";
import {useNavigate} from "react-router-dom";
import {PhoneInput} from "../../../../types/PhoneInput.ts";

const PhoneInputForm = ({children}: LayoutProps) => {
    const methods = useForm<PhoneInput>();
    const {
        handleSubmit,
        formState: {errors},
    } = methods;

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<PhoneInput> = (data) => {
        appDataSignal.value = {
            ...appDataSignal.value,
            phoneNumber: data.phoneNumber,
            dialCode: data.dialCode
        }

        navigate('/registration/2');
    }

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col responsive:items-center">
                {errors.phoneNumber && <InvalidInput/>}
                {children}
            </form>
        </FormProvider>
    )
}

export default PhoneInputForm;