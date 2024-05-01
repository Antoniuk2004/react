import {shotUrlRequest} from "./api/shot-url-request.ts";
import {Dispatch, RefObject, SetStateAction} from "react";
import {isCopyDialogShownSignal} from "./components/CopyDialog/is-copy-dialog-shown-signal.ts";

export const onSubmit = async (data: any, setError: any,
                               setShortenedUrl: Dispatch<SetStateAction<string>>) => {
    const shortenedUrl = await shotUrlRequest(data.url);

    if (shortenedUrl) {
        setShortenedUrl(shortenedUrl);
    } else {
        setError("url", {message: "API limit reached, please try again later"});
    }
}

export const handleCopy = (urlRef: RefObject<null | HTMLSpanElement>) => {
    if (!urlRef.current) return;

    const url = urlRef.current.textContent;
    navigator.clipboard.writeText(url);
    isCopyDialogShownSignal.value= true;
}