import {LayoutProps} from "../../types/LayoutProps.ts";

const TopTextLayout = ({ children }: LayoutProps) => {
    return (
        <div className="text-9xl font-semibold">
            {children}
        </div>
    )
}

export default TopTextLayout;