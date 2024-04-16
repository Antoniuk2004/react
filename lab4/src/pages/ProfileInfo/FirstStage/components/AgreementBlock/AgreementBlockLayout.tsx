import {LayoutProps} from "../../../../../types/LayoutProps.ts";

const AgreementBlockLayout = ({children}: LayoutProps) => {
    return (
        <div className={"flex gap-2 h-8 w-full items-center responsive:justify-center"}>
            {children}
        </div>
    )
}

export default AgreementBlockLayout;