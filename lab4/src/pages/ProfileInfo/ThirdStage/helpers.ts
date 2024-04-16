import {useFormContext} from "react-hook-form";
import {findMessage, sortObjectProperties} from "../../../utils/find-message.ts";
import {z} from "zod";

export const getErrorMessages = () => {
    const {formState: {errors}} = useFormContext();
    const desiredOrder = ['address, city, country, zipCode, optional'];
    const sortedErrors = sortObjectProperties(errors, desiredOrder);

    return findMessage(sortedErrors);
}

export const thirdProfileSchema = z.object({
    address: z.string().min(1, 'Address is required'),
    city: z.string().min(1, 'City is required'),
    country: z.string().min(1, 'Country is required'),
    zipCode: z.string().min(5, 'Zip code is invalid')
        .max(10, 'Zip code is invalid'),
    optional: z.string()
})

export const formatZipCode = (value: string) => {
    console.log(value);

    const {setValue} = useFormContext();

    const newValue = value.substring(0, 10);
    setValue('zipCode', newValue);
}