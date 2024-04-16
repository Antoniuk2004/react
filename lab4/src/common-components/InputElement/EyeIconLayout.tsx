import {LayoutProps} from "../../types/LayoutProps.ts";
import {Dispatch, SetStateAction} from "react";

type EyeIconLayoutProps = LayoutProps & {
    type: string
    setPasswordVisible: Dispatch<SetStateAction<boolean>>
}

const EyeIconLayout = (props: EyeIconLayoutProps) => {
    const {children, type, setPasswordVisible} = props;

    if (type !== "password") return null;
    return (
        <div className="absolute right-1 flex items-center h-full">
            <div
                onClick={() => setPasswordVisible(prevState => !prevState)}
                className="h-fit text-2xl cursor-pointer text-eye">
                {children}
            </div>
        </div>
    )
}

export default EyeIconLayout;