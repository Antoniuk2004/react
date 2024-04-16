import {LayoutProps} from "../../../../../../../types/LayoutProps.ts";

const CodeConfirmationFieldLayout = ({children} : LayoutProps) => {
    return (
        <div className="flex flex-col gap-2">
            {children}
        </div>
    )
}

export default CodeConfirmationFieldLayout;