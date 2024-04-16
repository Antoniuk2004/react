import {useEffect, useState} from "react";
import {useSelected} from "./use-selected.ts";
import {
    SocialNetwork, socialNetworks
} from "./social-network-options.tsx";
import {SelectType} from "../../types/SelectType.ts";
import {SelectElementProps} from "./SelectElement.tsx";

export const getInitialSelectData = (props: SelectElementProps) => {
    const {options, id, type} = props;

    const [query, setQuery] = useState('');
    const {selected, setSelected} = useSelected(id);

    let filteredOptions: string[] | SocialNetwork[];
    if (type === SelectType.NORMAL) {
        filteredOptions = options.filter((option) =>
            option.toLowerCase().includes(query.toLowerCase()));
    } else if (type === SelectType.NETWORK) {
        filteredOptions = options.filter((options) =>
            options.name.toLowerCase().includes(query.toLowerCase()));
    }

    useEffect(() => {
        const {initialValue} = props;
        if(initialValue) setSelected(initialValue);
    }, []);

    return {
        query,
        setQuery,
        selected,
        setSelected,
        filteredOptions,
    }
}

export const getNetworkIcon = (value: string) => {
    return socialNetworks.filter((network) =>
        network.name === value)[0].icon;
}