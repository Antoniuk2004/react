import {getNetworkIcon} from "../../helpers.ts";
import {SelectType} from "../../../../types/SelectType.ts";
import NetworkSelectedIconLayout from "./NetworkSelectedIconLayout.tsx";

type NetworkSelectedElementProps = {
    value: string;
    type: SelectType;
}

const NetworkSelectedIcon = (props: NetworkSelectedElementProps) => {
    const {value, type} = props;

    if (type === SelectType.NORMAL || !value || value === '') return null;
    else return (
        <NetworkSelectedIconLayout>
            {getNetworkIcon(value)}
        </NetworkSelectedIconLayout>
    )
}

export default NetworkSelectedIcon;