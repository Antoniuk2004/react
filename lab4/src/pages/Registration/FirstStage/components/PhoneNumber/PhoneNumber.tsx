import PhoneNumberLayout from "./PhoneNumberLayout";
import { handleNumberChange } from "../../../handlers.ts";
import {useFormContext} from "react-hook-form";
import InputElement from "../../../../../common-components/InputElement/InputElement.tsx";

const PhoneNumber = () => {
    const {register, setValue} = useFormContext();

    return (
        <PhoneNumberLayout>
            <input
                autoComplete="off"
                {...register("phoneNumber", {
                    required: true,
                    minLength: 10,
                })}
                onChange={(event) =>
                    handleNumberChange(event, setValue)
                }
                className="focus:outline-0 border-b border-phone-number focus:border-primary py-2 px-4 responsive:w-full h-full bg-transparent"
            />
        </PhoneNumberLayout>
    );
};

export default PhoneNumber;