import {LayoutProps} from "../../../../../types/LayoutProps.ts";

const InvalidInputDataLayout = ({children} : LayoutProps) => {
    return (
        <div className="responsive:w-full responsive:px-6">
            {children}
        </div>
    )
}

export default InvalidInputDataLayout;