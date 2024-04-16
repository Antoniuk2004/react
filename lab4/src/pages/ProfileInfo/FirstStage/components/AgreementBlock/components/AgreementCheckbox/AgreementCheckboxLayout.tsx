import {LayoutProps} from "../../../../../../../types/LayoutProps.ts";

const AgreementCheckboxLayout = ({children} : LayoutProps) => {
    return (
        <div className={"h-full w-8 flex items-center justify-center"}>
            {children}
        </div>
    )
}

export default AgreementCheckboxLayout;