import {LayoutProps} from "../../../../types/LayoutProps.ts";
import {FormProvider, SubmitHandler, useForm} from "react-hook-form";
import {firstProfileSchema} from "../helpers.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {signal} from "@preact/signals-react";
import {useNavigate} from "react-router-dom";
import {appDataSignal} from "../../../../App.tsx";

type InputsType = {
    agreement: boolean;
    secondName: string;
    dateOfBirth: Date;
    firstName: string;
    country: string;
    city: string;
}

export const countrySignal = signal<string>('');

const FirstProfileInfoForm = ({children}: LayoutProps) => {
    const methods = useForm<InputsType>({resolver: zodResolver(firstProfileSchema)});
    const {handleSubmit} = methods;

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<InputsType> = (data: InputsType) => {
        appDataSignal.value = {
            ...appDataSignal.value,
            ...data
        }

        navigate("/profile-info/2");
    }

    return (
        <FormProvider {...methods}>
            <form
                className="flex w-full flex-col gap-8 responsive:items-center"
                onSubmit={handleSubmit(onSubmit)}
            >
                {children}
            </form>
        </FormProvider>
    )
}

export default FirstProfileInfoForm;