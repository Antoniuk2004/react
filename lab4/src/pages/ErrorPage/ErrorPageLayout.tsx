import {LayoutProps} from "../../types/LayoutProps.ts";

const ErrorPageLayout = ({children} : LayoutProps) => {
    return (
        <div className="w-full text-notification font-['Poppins'] h-screen flex flex-col items-center select-none justify-center">
            {children}
        </div>
    )
}

export default ErrorPageLayout;