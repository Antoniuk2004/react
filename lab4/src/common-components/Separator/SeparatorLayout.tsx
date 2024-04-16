import {LayoutProps} from "../../types/LayoutProps.ts";

const SeparatorLayout = ({children}: LayoutProps) => {
    return (
        <div className={"w-full h-4 hidden responsive:flex items-center"}>
            {children}
        </div>
    )
}

export default SeparatorLayout;