import {ReactNode} from "react";

export type MultipleLinesInputProps = {
    id: string;
    LeftIcon?: ReactNode;
    setValue: (id: string, value: string) => void;
}