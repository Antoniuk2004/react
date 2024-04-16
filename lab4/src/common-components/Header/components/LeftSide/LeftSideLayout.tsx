import {LayoutProps} from "../../../../types/LayoutProps.ts";

const LeftSideLayout = ({children} : LayoutProps) => {
    return (
        <div className="flex items-center gap-x-2">
            {children}
        </div>
    )
}

export default LeftSideLayout;