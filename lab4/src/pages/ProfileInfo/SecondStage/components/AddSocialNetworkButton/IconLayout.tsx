import {LayoutProps} from "../../../../../types/LayoutProps.ts";

const IconLayout = ({children}: LayoutProps) => {
    return (
        <div className={"flex items-center justify-center h-full text-lg"}>
            {children}
        </div>
    )
}

export default IconLayout;