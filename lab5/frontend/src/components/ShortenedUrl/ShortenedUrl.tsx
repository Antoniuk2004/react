import ShortenedUrlLayout from "./ShortenedUrlLayout";
import {useRef} from "react";

type ShortenedUrlProps = {
    shortenedUrl: string;
}

const ShortenedUrl = (props: ShortenedUrlProps) => {
    const {shortenedUrl} = props;
    const urlRef = useRef<null | HTMLSpanElement>(null);

    if(shortenedUrl === "") return null;
    return (
        <ShortenedUrlLayout urlRef={urlRef}>
            <span>Your shortened url:</span>
            <span ref={urlRef}>{shortenedUrl}</span>
        </ShortenedUrlLayout>
    )
}

export default ShortenedUrl;