import CaptionTextLayout from "./CaptionTextLayout.tsx";
import {LayoutProps} from "../../../../../types/LayoutProps.ts";

type CaptionTextProps = LayoutProps & {
    text?: string
}

const CaptionText = (props: CaptionTextProps) => {
    const {children, text} = props;

    return (
        <div className={`${text ? text : 'text-body '} text-sm leading-4.5 items-center flex gap-2 font-normal font-['Poppins']`}>
            {children}
        </div>
    )
}

export default CaptionText;