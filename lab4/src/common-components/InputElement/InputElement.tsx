import InputElementLayout from "./InputElementLayout.tsx";
import {IoMdEye, IoMdEyeOff} from "react-icons/io";
import EyeIconLayout from "./EyeIconLayout.tsx";
import {useState} from "react";
import LeftIconLayout from "./LeftIconLayout.tsx";
import {InputProps} from "../../types/InputProps.ts";
import {useFormContext} from "react-hook-form";

const InputElement = (props: InputProps) => {
    const {type, register, id, LeftIcon, placeholder, errorMessage, readOnly, formatZipCode} = props;
    const [passwordVisible, setPasswordVisible] = useState(false);
    const {setValue} = useFormContext();

    return (
        <InputElementLayout>
            {LeftIcon ? <LeftIconLayout>
                {LeftIcon}
            </LeftIconLayout> : null}
            <input
                id={id}
                {...register(id, {
                    required: errorMessage ? errorMessage : true,
                })}
                onChange={(e) =>
                    formatZipCode && setValue(id, e.target.value.substring(0, 10))}
                readOnly={readOnly ? readOnly : false}
                placeholder={placeholder}
                autoComplete={"off"}
                className={`${type === "password" ? 'pl-4 pr-8' : 'px-4 '} 
                ${LeftIcon ? 'pl-10' : ''}
                ${readOnly ? 'cursor-auto' : 'focus:border-primary'}
                w-full h-full bg-transparent border-b border-phone-number  py-2 focus:outline-0 `}
                type={type === "password" ? passwordVisible ? "text" : "password" : type}
            />
            <EyeIconLayout type={type} setPasswordVisible={setPasswordVisible}>
                {passwordVisible ? <IoMdEyeOff/> : <IoMdEye/>}
            </EyeIconLayout>
        </InputElementLayout>
    )
}

export default InputElement;