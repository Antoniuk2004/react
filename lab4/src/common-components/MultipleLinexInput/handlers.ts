import {FormEvent} from "react";
import {getTextFromNode} from "../../utils/get-text-from-node.ts";

export const handleInput = (e: FormEvent<HTMLDivElement>,
                            setValue: (id: string, value: string) => void,
                            id: string
) => {
    const value = e.currentTarget.innerHTML;
    const parser = new DOMParser();
    const doc = parser.parseFromString(value, 'text/html');
    const text = getTextFromNode(doc.body);

    setValue(id, text);
}

