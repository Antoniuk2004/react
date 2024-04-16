import NormalElement from "./NormatElement/NormalElement.tsx";
import {
    SocialNetwork
} from "../social-network-options.tsx";
import {SelectType} from "../../../types/SelectType.ts";
import NetworkElement from "./NetworkElement/NetworkElement.tsx";

type ElementListProps = {
    type: SelectType;
    filteredOptions: string[] | SocialNetwork[];
}

const ElementList = (props: ElementListProps) => {
    const {filteredOptions, type} = props;

    if (filteredOptions.length === 0) return null;

    return (
        <>
            {filteredOptions.map((option, index: number) => (
                type === SelectType.NORMAL ?
                    <NormalElement option={option} key={index}/>
                    : <NetworkElement option={option} key={index}/>
            ))}
        </>
    )

}

export default ElementList;