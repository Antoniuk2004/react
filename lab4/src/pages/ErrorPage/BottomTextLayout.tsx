import {LayoutProps} from "../../types/LayoutProps.ts";

const BottomTextLayout = ({children}: LayoutProps) => {
    return (
        <div className="uppercase text-3xl opacity-80 font-semibold">
            {children}
        </div>
    )
}

export default BottomTextLayout;