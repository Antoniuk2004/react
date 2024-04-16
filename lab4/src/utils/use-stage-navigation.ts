import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {appDataSignal} from "../App.tsx";

export enum RegistrationPageType {
    PERSONAL_INFO = "personal-info",
    NORMAL = "normal",
}

export const useStageNavigation = (registrationPageType: RegistrationPageType, stage: number) => {
    const [checked, setChecked] = useState(false);

    const navigation = useNavigate();

    useEffect(() => {
        const data = appDataSignal.value;

        if (registrationPageType === RegistrationPageType.NORMAL) {

            if (stage === 2 && (!data.phoneNumber || !data.dialCode)) {
                navigation("/registration/1");
            } else if (stage === 3 && !data.confirmedNumber) {
                navigation("/registration/1");
            }
        }

        if (registrationPageType === RegistrationPageType.PERSONAL_INFO) {
            if (stage === 1 && !data.confirmedNumber) {
                navigation("/registration/1");
            } else if (stage === 2 &&  (!data.firstName || !data.secondName
                || !data.dateOfBirth || !data.country || !data.city)) {
                navigation("/registration/1");
            } else if (stage === 3 && data.socialNetworks.length === 0) {
                navigation("/registration/1");
            }
        }

        setChecked(true);
    }, []);

    return checked;
}