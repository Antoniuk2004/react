import {useEffect, useState} from "react";
import {passwordSchema, PasswordStrength} from "../helpers.ts";

export const usePasswordStrength = (getValues: any) => {
    const [passwordStrength, setPasswordStrength] = useState<PasswordStrength>(PasswordStrength.None);

    const password = getValues().password;
    useEffect(() => {
        const parsedData = passwordSchema.safeParse({password: password});

        if (!parsedData.success) {
            // @ts-ignore
            const error = parsedData.error;
            if (error.issues[0].code !== "invalid_type") {
                setPasswordStrength(PasswordStrength.Bad);
            }
        } else {
            setPasswordStrength(PasswordStrength.Good);
        }
    }, [password]);

    return passwordStrength;
}