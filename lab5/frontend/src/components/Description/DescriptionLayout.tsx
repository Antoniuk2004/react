import {LayoutProps} from "../../types/LayoutProps.ts";

const DescriptionLayout = ({children} : LayoutProps) => {
    return (
        <div className={"mt-2.5 mb-5 text-lg text-center"}>
            {children}
        </div>
    )
}

export default DescriptionLayout;