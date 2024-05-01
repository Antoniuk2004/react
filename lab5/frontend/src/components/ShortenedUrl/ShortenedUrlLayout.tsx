import {LayoutProps} from "../../types/LayoutProps.ts";
import {RefObject} from "react";
import {handleCopy} from "../../handlers.ts";

type ShortenedUrlLayoutProps = LayoutProps & {
    urlRef: RefObject<null | HTMLSpanElement>;
}

const ShortenedUrlLayout = (props: ShortenedUrlLayoutProps) => {
    const {children, urlRef} = props;

    return (
        <div
            onClick={() => handleCopy(urlRef)}
            className={"text-lg flex gap-x-1 my-2 text-neutral-400 cursor-pointer font-bold"}>
            {children}
        </div>
    )
}

export default ShortenedUrlLayout;