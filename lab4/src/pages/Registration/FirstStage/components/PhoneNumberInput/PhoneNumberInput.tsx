import BlockContainer from "../../../../../common-components/BlockContainer.tsx";
import PhoneInputLabel from "../PhoneInputLabel/PhoneInputLabel.tsx";
import PhoneNumber from "../PhoneNumber/PhoneNumber.tsx";
import PhoneLayout from "./PhoneLayout.tsx";
import {useDialCodes} from "../../use-dial-codes.ts";
import SelectElement from "../../../../../common-components/SelectElement/SelectElement.tsx";
import {SelectType} from "../../../../../types/SelectType.ts";

const PhoneNumberInput = () => {
    const dialCodes = useDialCodes();

    return (
        <BlockContainer>
            <PhoneInputLabel/>
            <PhoneLayout>
                <SelectElement
                    width={'w-28'}
                    type={SelectType.NORMAL}
                    options={dialCodes}
                    id={'dialCode'}/>
                <PhoneNumber/>
            </PhoneLayout>
        </BlockContainer>
    );
}

export default PhoneNumberInput;