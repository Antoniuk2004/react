import {appDataSignal} from "../../../App.tsx";
import {useFormContext} from "react-hook-form";
import {z} from "zod";
import {findMessage, sortObjectProperties} from "../../../utils/find-message.ts";

export const getPhoneNumber = () => {
    const number = appDataSignal.value.phoneNumber;
    const dialCode = appDataSignal.value.dialCode;

    return `${dialCode} ${number}`;
}

export const getErrorMessages = () => {
    const {formState: {errors}} = useFormContext();
    const desiredOrder = ['email', 'phoneNumber', 'socialNetworks'];
    const sortedErrors = sortObjectProperties(errors, desiredOrder);

    return  findMessage(sortedErrors);
}

export const secondProfileSchema = z.object({
    email: z.nullable(z.string().email('Invalid email address'))
        .refine(value => value !== null, {'message': 'Email is required'}),
    phoneNumber: z.string().min(1, 'Phone number is required'),
    socialNetworks: z.array(z.object({
        type: z.string().min(1, 'Social network type is required'),
        value: z.string().min(1, 'Social network nickname is required')
    })).min(1, 'At least one social network is required')
});