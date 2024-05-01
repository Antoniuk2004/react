import {useFormContext} from "react-hook-form";

const UrlInput = () => {
    const {register, formState: {errors}} = useFormContext();

    return (
        <input
            autoComplete={"off"}
            placeholder={"Enter a URL"}
            className={`w-full py-2.5 px-4 text-lg bg-transparent border-y border-l border-neutral-400 focus:outline-0 focus:border-purple-500 duration-200 ease-out rounded-l-md 
            ${errors && errors.url && "border-red-500 focus:border-red-500"}`}
            {...register("url", {required: true})}
            type="text"
        />
    );
}

export default UrlInput;