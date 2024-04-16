import NetworkElementLayout from "./NetworkElementLayout.tsx";
import {
    SocialNetwork
} from "../../social-network-options.tsx";

type ElementProps = {
    option: SocialNetwork;
}

const NetworkElement = (props: ElementProps) => {
    const {option} = props;

    return (
        <NetworkElementLayout option={option}>
            {option.icon}
            <span>{option.name}</span>
        </NetworkElementLayout>
    )
}

export default NetworkElement;