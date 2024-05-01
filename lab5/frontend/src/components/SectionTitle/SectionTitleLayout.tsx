import {LayoutProps} from "../../types/LayoutProps.ts";

const SectionTitleLayout = ({children} : LayoutProps) => {
    return (
        <div className={"text-4xl font-bold mt-2.5 mb-8 text-center"}>
            {children}
        </div>
    )
}

export default SectionTitleLayout;