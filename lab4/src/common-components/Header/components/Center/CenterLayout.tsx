import {LayoutProps} from "../../../../types/LayoutProps.ts";

const CenterLayout = ({children}: LayoutProps) => {
    return (
        <div className="flex flex-col w-114 responsive:left-0 responsive:w-full responsive:top-0 responsive:absolute responsive:mt-28 responsive:items-center">
            {children}
        </div>
    )
}

export default CenterLayout;