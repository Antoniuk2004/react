import {LayoutProps} from "../../types/LayoutProps.ts";

const HomeLayout = ({children} : LayoutProps) => {
    return (
        <div className="w-full gap-8 flex-col h-svh flex items-center justify-center">
            {children}
        </div>
    )
}

export default HomeLayout;