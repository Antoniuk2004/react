import {FormProvider, SubmitHandler, useForm} from "react-hook-form";
import {ConfirmationCodeInput} from "../../../../types/ConfirmationCodeInput.ts";
import {createContext} from "react";
import {useNavigate} from "react-router-dom";
import {LayoutProps} from "../../../../types/LayoutProps.ts";
import InvalidInputLayout from "../../FirstStage/components/InvalidInput/InvalidInputLayout.tsx";
import {appDataSignal} from "../../../../App.tsx";


const ConfirmationCodeForm = ({children}: LayoutProps) => {
    const methods = useForm<ConfirmationCodeInput>();
    const {handleSubmit, formState: {errors}} = methods;

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<ConfirmationCodeInput> = (data) => {
        appDataSignal.value = {
            ...appDataSignal.value,
            confirmedNumber: true
        }

        navigate('/registration/3');
    }

    return (
        <FormProvider {...methods}>
            <form
                className="flex flex-col"
                onSubmit={handleSubmit(onSubmit)}
            >
                {errors.code && <InvalidInputLayout>Invalid confirmation code</InvalidInputLayout>}
                {children}
            </form>
        </FormProvider>
    )
}

export default ConfirmationCodeForm;