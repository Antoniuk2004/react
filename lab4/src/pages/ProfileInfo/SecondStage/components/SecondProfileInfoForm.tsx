import {FormProvider, SubmitHandler, useFieldArray, useForm} from "react-hook-form";
import {LayoutProps} from "../../../../types/LayoutProps.ts";
import {appDataSignal} from "../../../../App.tsx";
import {getPhoneNumber, secondProfileSchema} from "../helpers.ts";
import {createContext} from "react";
import {zodResolver} from "@hookform/resolvers/zod";
import {useNavigate} from "react-router-dom";
import {SocialNetworkType} from "../../../../types/SocialNetworkType.ts";


type InputsType = {
    email: string,
    phoneNumber: string,
    socialNetworks: SocialNetworkType[]
}

export const SocialNetworkContext = createContext({
    fields: null,
    append: null,
    remove: null
});

const SecondProfileInfoForm = ({children}: LayoutProps) => {
    const defaultValues: InputsType = {
        email: appDataSignal.value.email,
        phoneNumber: getPhoneNumber(),
        socialNetworks: [
            {type: '', value: ''}
        ]
    };

    const methods = useForm<InputsType>({
        defaultValues,
        resolver: zodResolver(secondProfileSchema)
    });

    const {fields, append, remove} = useFieldArray({
        control: methods.control,
        name: 'socialNetworks',
        rules: {
            required: 'At least one social network is required'
        }
    });

    const navigate = useNavigate();
    const onSubmit: SubmitHandler<InputsType> = (data: any) => {
        appDataSignal.value = {
            ...appDataSignal.value,
            ...data
        }

        navigate('/profile-info/3');
    }

    return (
        <SocialNetworkContext.Provider value={{fields, append, remove}}>
            <FormProvider {...methods}>
                <form
                    className="flex w-full flex-col gap-8 responsive:items-center"
                    onSubmit={methods.handleSubmit(onSubmit)}>
                    {children}
                </form>
            </FormProvider>
        </SocialNetworkContext.Provider>
    )
}

export default SecondProfileInfoForm;