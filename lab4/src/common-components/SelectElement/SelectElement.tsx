import SelectElementLayout from "./SelectElementLayout.tsx";
import TopLine from "./components/TopLine/TopLine.tsx";
import BodyLayout from "./components/BodyLayout.tsx";
import NothingFound from "./components/NothingFound.tsx";
import ElementList from "./components/ElementList.tsx";
import {
    SocialNetwork
} from "./social-network-options.tsx";
import {SelectType} from "../../types/SelectType.ts";
import {getInitialSelectData} from "./helpers.ts";


export type SelectElementProps = (NormalSelectProps | SelectNetworkProps) & {
    id: string;
    initialValue?: string;
    width?: string;
};

type NormalSelectProps = {
    type: SelectType.NORMAL;
    options: string[];
}

type SelectNetworkProps = {
    type: SelectType.NETWORK;
    options: SocialNetwork[];
}

const SelectElement = (props: SelectElementProps) => {
    const {id, type, width} = props;

    const {
        query, setQuery,
        selected, setSelected,
        filteredOptions
    } = getInitialSelectData(props);

    return (
        <SelectElementLayout width={width} selected={selected} setSelected={setSelected}>
            <TopLine width={width} selected={selected} type={type} setQuery={setQuery} id={id}/>
            <BodyLayout setQuery={setQuery}>
                <NothingFound
                    filteredOptions={filteredOptions}
                    query={query}/>
                <ElementList
                    type={type}
                    filteredOptions={filteredOptions}/>
            </BodyLayout>
        </SelectElementLayout>
    )
}


export default SelectElement;