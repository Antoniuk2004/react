import {PasswordStrength} from "../pages/Registration/ThirdStage/helpers.ts";
import {ReactNode} from "react";

export type InputProps = {
    type: string
    register: any;
    id: string;
    validateAction?(value: string): PasswordStrength;
    LeftIcon?: ReactNode;
    placeholder?: string;
    errorMessage?: string;
    readOnly?: boolean;
    formatZipCode?: boolean;
};