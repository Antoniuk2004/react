import {z} from "zod";
import {appDataSignal} from "../../../App.tsx";
import {useFormContext} from "react-hook-form";
import {findMessage, sortObjectProperties} from "../../../utils/find-message.ts";

export const firstProfileSchema = z.object({
    agreement: z.boolean().refine((agreement) => {
        return agreement;
    }, {message: 'You must agree to the terms and conditions'}),
    firstName: z.string().min(1, 'First name is required'),
    secondName: z.string().min(1, 'Second name is required'),
    dateOfBirth: z.nullable(z.date())
        .refine(value => value !== null, {'message': 'Date of birth is required'}),
    country: z.string().min(1, 'Country name is required'),
    city: z.string().min(1, 'City name is required')
});

export const getItin = () => {
    const itin = appDataSignal.value.itin;
    if (itin) {
        const first = Math.round(itin / 100000);
        const second = Math.round((itin % 100000) / 1000);
        const third = Math.round(itin % 1000);

        return `${first}-${second}-${third}`;
    } else return 'NULL';
}

export const getErrorMessages = () => {
    const {formState: {errors}} = useFormContext();
    const desiredOrder = ['agreement', 'firstName', 'secondName', 'dateOfBirth', 'country', 'city'];
    const sortedErrors = sortObjectProperties(errors, desiredOrder);

    return  findMessage(sortedErrors);
}