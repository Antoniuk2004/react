import {useEffect, useState} from "react";
import {effect} from "@preact/signals-react";
import {socialNetworkSignal} from "../../social-network-signal.ts";

export const useSocialNetworks = () => {
    const [fields, setFields] = useState(socialNetworkSignal.value.fields)

    useEffect(() => {
        effect(() => {
            const values = socialNetworkSignal.value.fields;

            if (!values) setFields([]);
            else setTimeout(() => setFields(values), 0);
        })
    }, []);

    return fields;
}