import {LayoutProps} from "../../../types/LayoutProps.ts";
import {FormProvider, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {thirdProfileSchema} from "./helpers.ts";
import {appDataSignal} from "../../../App.tsx";
import {useNavigate} from "react-router-dom";
import {initialAppValues} from "../../../utils/initial-app-values.ts";
import {isModalOpenSignal} from "../../../common-components/RegistrationModal/use-open.ts";
import {tempOptionsSignal} from "../../../common-components/SelectElement/temp-options-signal.ts";

type InputsProps = {
    address: string;
    city: string;
    country: string;
    zipCode: string;
    optional: string;
}

const ThirdProfileInfoForm = ({children}: LayoutProps) => {
    const methods = useForm<InputsProps>({
        resolver: zodResolver(thirdProfileSchema)
    });
    const {handleSubmit} = methods;

    const navigate = useNavigate();

    const handleFormSubmit = (data: any) => {
        appDataSignal.value = {
            ...appDataSignal.value,
            ...data
        }

        console.log(appDataSignal.value);
        appDataSignal.value = initialAppValues;
        tempOptionsSignal.value = [];
        navigate('/');
        isModalOpenSignal.value = true;
    }

    return (
        <FormProvider {...methods}>
            <form
                className="flex w-full flex-col gap-8 responsive:items-center"
                onSubmit={handleSubmit(handleFormSubmit)}>
                {children}
            </form>
        </FormProvider>
    )
}

export default ThirdProfileInfoForm;