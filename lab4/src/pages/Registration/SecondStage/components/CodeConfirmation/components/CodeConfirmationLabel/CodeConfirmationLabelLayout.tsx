import {LayoutProps} from "../../../../../../../types/LayoutProps.ts";

const CodeConfirmationLabelLayout = ({children}: LayoutProps) => {
    return (
        <div className="text-sm leading-4.5 font-['Poppins'] font-normal">
            {children}
        </div>
    )
}

export default CodeConfirmationLabelLayout;