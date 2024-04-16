import {LayoutProps} from "../../../../../types/LayoutProps.ts";

const InvalidInputLayout = ({ children }: LayoutProps) => {
    return (
        <div className="font-['Poppins'] text-base mb-1 text-red-400 flex gap-1">
            {children}
        </div>
    )
}

export default InvalidInputLayout;