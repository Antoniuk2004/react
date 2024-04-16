import {LayoutProps} from "../../../../../types/LayoutProps.ts";

type CaptionTextLayoutProps = LayoutProps & {
    text?: string
}

const CaptionTextLayout = ({children} : LayoutProps) => {
    return (
        <div className="text-sm leading-4.5 items-center flex gap-2 font-normal text-body font-['Poppins']">
            {children}
        </div>
    )
}

export default CaptionTextLayout;