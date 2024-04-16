import {LayoutProps} from "../../../types/LayoutProps.ts";

const CompanyNameLayout = ({children} : LayoutProps) => {
    return (
        <div className="uppercase text-base leading-5 font-bold font-['Raleway'] select-none">
            {children}
        </div>
    )
}

export default CompanyNameLayout;