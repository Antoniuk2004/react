import {LayoutProps} from "../../types/LayoutProps.ts";

const InvalidInputLayout = ({children} : LayoutProps) => {
    return (
        <div className={"text-lg text-red-500"}>
            {children}
        </div>
    )
}

export default InvalidInputLayout;