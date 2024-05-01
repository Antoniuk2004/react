import {LayoutProps} from "../types/LayoutProps.ts";

const AppLayout = ({children} : LayoutProps) => {
    return (
        <div className={"flex flex-col w-full h-svh items-center justify-center bg-neutral-100 overflow-hidden"}>
            {children}
        </div>
    )
}

export default AppLayout;