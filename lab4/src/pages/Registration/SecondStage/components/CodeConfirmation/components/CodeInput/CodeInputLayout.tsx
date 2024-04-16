import {LayoutProps} from "../../../../../../../types/LayoutProps.ts";

const CodeInputLayout = ({children} : LayoutProps) => {
    return (
        <div className="w-full text-lg h-11">
            {children}
        </div>
    )
}

export default CodeInputLayout;