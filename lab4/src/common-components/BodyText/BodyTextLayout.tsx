import {LayoutProps} from "../../types/LayoutProps.ts";

const BodyTextLayout = ({children} : LayoutProps) => {
    return (
        <div className="text-body w-108 responsive:w-full font-light text-base leading-5.5">
            {children}
        </div>
    )
}

export default BodyTextLayout;