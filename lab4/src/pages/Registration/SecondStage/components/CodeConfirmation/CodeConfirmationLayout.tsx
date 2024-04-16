import {LayoutProps} from "../../../../../types/LayoutProps.ts";

const CodeConfirmationLayout = ({children} : LayoutProps) => {
    return (
        <div className="flex mb-8 gap-4 responsive:w-full responsive:px-4 responsive:flex-col">
            {children}
        </div>
    )
}

export default CodeConfirmationLayout;