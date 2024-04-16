import CodeInputLayout from "./CodeInputLayout.tsx";
import {handleCodeChange} from "../../../../handlers.ts";
import {useFormContext} from "react-hook-form";

const CodeInput = () => {
    const {register, setValue} = useFormContext();

    return (
        <CodeInputLayout>
            <input
                {...register("code", {
                    required: true,
                    minLength: 4,
                    maxLength: 4
                })}
                onChange={(e) => handleCodeChange(setValue, e)}
                placeholder={"— — — —"}
                className="w-full h-full p-2 focus:outline-0 focus:border-b-primary bg-transparent border-b border-b-phone-number"
                type="number"
            />
        </CodeInputLayout>
    )
}

export default CodeInput;