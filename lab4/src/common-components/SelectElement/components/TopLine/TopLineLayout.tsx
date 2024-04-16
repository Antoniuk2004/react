import {LayoutProps} from "../../../../types/LayoutProps.ts";

const TopLineLayout = ({children} : LayoutProps) => {
    return (
        <div className="relative h-11 w-full font-['Roboto'] gap-4 text-lg justify-between flex items-center cursor-pointer select-none">
            {children}
        </div>
    )
}

export default TopLineLayout;