import PhoneNumberLayout from "./PhoneNumberLayout.tsx";
import {getPhoneNumber} from "../../helpers.tsx";

const PhoneNumber = () => {
    const phoneNumber = getPhoneNumber();
    
    return (
        <PhoneNumberLayout>
            <span>{phoneNumber}</span>
        </PhoneNumberLayout>
    )
}

export default PhoneNumber;