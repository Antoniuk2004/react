import {LayoutProps} from "../../types/LayoutProps.ts";

const LeftIconLayout = ({children} : LayoutProps) => {
    return (
        <div className="absolute text-2xl left-0 h-full flex items-center justify-center text-eye">
            {children}
        </div>
    )
}

export default LeftIconLayout;