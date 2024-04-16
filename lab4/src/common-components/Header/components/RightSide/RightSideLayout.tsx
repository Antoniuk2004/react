import {LayoutProps} from "../../../../types/LayoutProps.ts";

const RightSideLayout = ({children} : LayoutProps) => {
    return (
        <div className="flex items-center justify-end">
            {children}
        </div>
    )
}

export default RightSideLayout;