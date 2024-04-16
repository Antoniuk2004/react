import {LayoutProps} from "../../../../../../../types/LayoutProps.ts";

const CaptionTextLayout = ({children}: LayoutProps) => {
    return (
        <div className="font-['Poppins'] text-xs text-body font-normal">
            {children}
        </div>
    )
}

export default CaptionTextLayout;