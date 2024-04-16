import {LayoutProps} from "../types/LayoutProps.ts";

const FieldLabelLayout = ({children} : LayoutProps) => {
    return (
        <div className="leading-5 text-notification font-normal text-sm font-['Poppins']">
            {children}
        </div>
    )
}

export default FieldLabelLayout;