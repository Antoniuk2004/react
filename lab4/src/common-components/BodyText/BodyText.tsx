import BodyTextLayout from "./BodyTextLayout.tsx";
export enum BodyTextType {
    REGISTRATION = 'REGISTRATION',
    PROFILE_INFO = 'PROFILE_INFO'
}

type BodyTextProps = {
    type: BodyTextType;
}


const BodyText = (props: BodyTextProps) => {
    const {type} = props;

    const registrationText = 'Fill in the registration data. It will take a couple of minutes. All you need is a phone number and e-mail';
    const profileInfoText = 'Fill in the data for profile. It will take a couple of minutes. You only need a passport';

    return (
        <BodyTextLayout>
            <span>{type === BodyTextType.REGISTRATION ? registrationText : profileInfoText}</span>
        </BodyTextLayout>
    )
}

export default BodyText;