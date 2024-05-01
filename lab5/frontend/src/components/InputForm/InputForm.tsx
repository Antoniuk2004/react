import {LayoutProps} from "../../types/LayoutProps.ts";
import {FormProvider, useForm} from "react-hook-form";
import {urlSchema} from "../../helpers.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {onSubmit} from "../../handlers.ts";
import InvalidInput from "../InvalidInput/InvalidInput.tsx";
import ShortenedUrl from "../ShortenedUrl/ShortenedUrl.tsx";
import {useState} from "react";

const InputForm = ({children}: LayoutProps) => {
    const methods = useForm({resolver: zodResolver(urlSchema)});
    const {handleSubmit, formState: {errors}, setError} = methods;
    const [shortenedUrl, setShortenedUrl] = useState("");

    return (
        <FormProvider {...methods}>
            <InvalidInput errors={errors}/>
            <form
                className={"flex"}
                onSubmit={handleSubmit((data) =>
                    onSubmit(data, setError, setShortenedUrl))}>
                {children}
            </form>
            <ShortenedUrl shortenedUrl={shortenedUrl}/>
        </FormProvider>
    )
}

export default InputForm;