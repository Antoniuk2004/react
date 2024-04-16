import {LayoutProps} from "../../../../types/LayoutProps.ts";

const NetworkSelectedIconLayout = ({children}: LayoutProps) => {
    return (
        <div className="absolute responsive:text-notification text-eye left-0 h-full">
            <div className="flex items-center justify-center text-2xl h-full">
                {children}
            </div>
        </div>
    )
}

export default NetworkSelectedIconLayout;