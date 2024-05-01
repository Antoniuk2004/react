import {LayoutProps} from "../../types/LayoutProps.ts";

const TopTextLayout = ({children} : LayoutProps) => {
    return (
        <div className={"text-purple-500 px-5 pt-10 pb-6 text-5xl font-black"}>
            {children}
        </div>
    )
}

export default TopTextLayout;