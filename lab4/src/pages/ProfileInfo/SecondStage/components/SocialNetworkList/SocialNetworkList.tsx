import {useFormContext} from "react-hook-form";
import InputsSeparator from "../../../../../common-components/InputsSeparator.tsx";
import SelectElement from "../../../../../common-components/SelectElement/SelectElement.tsx";
import {SelectType} from "../../../../../types/SelectType.ts";
import {socialNetworks} from "../../../../../common-components/SelectElement/social-network-options.tsx";
import InputElement from "../../../../../common-components/InputElement/InputElement.tsx";
import {useSocialNetworks} from "./use-social-networks.ts";
import RemoveSocialNetworkButton from "../RemoveSocialNetworkButton/RemoveSocialNetworkButton.tsx";
import SocialNetworkElement from "../SocialNetworkElement.tsx";
import {useContext} from "react";
import {SocialNetworkContext} from "../SecondProfileInfoForm.tsx";

const SocialNetworkList = () => {
    const {register} = useFormContext();
    const {fields} = useContext(SocialNetworkContext);

    // if(fields.length === 0) return null;
    return (
        <>
            {fields.map((field, index) => (
                <SocialNetworkElement
                    key={field.id}
                    index={index}
                    register={register}
                />
            ))}
        </>
    )
}

export default SocialNetworkList;