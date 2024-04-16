import {LayoutProps} from "../../types/LayoutProps.ts";

const TitleLayout = ({ children } : LayoutProps) => {
    return (
        <div className="pb-4 font-['Poppins'] text-notification text-8 leading-9 font-bold">
            {children}
        </div>
    )
}

export default TitleLayout;