import {LayoutProps} from "../../../../types/LayoutProps.ts";

const ProgressbarLayout = ({children} : LayoutProps) => {
    return(
        <div className="flex gap-x-2 items-center max-w-114">
            {children}
        </div>
    )
}

export default ProgressbarLayout;