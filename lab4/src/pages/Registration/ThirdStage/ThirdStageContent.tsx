import TopLine from "../../../common-components/TopLine.tsx";
import Title from "../../../common-components/Title/Title.tsx";
import BodyText, {BodyTextType} from "../../../common-components/BodyText/BodyText.tsx";
import Notification from "../FirstStage/components/Notification/Notification.tsx";
import PageContentLayout from "../../../common-components/PageContentLayout.tsx";
import PhoneNumberContainer from "../../../common-components/PhoneNumberContainer.tsx";
import ConfirmedNumber from "./components/ConfirmedNumber.tsx";
import BlockContainer from "../../../common-components/BlockContainer.tsx";
import Button from "../../../common-components/Button.tsx";
import EmailPasswordForm from "./components/EmailPasswordForm.tsx";
import EmailInput from "./components/EmailInput.tsx";
import PasswordInput from "./components/PasswordInput.tsx";

const ThirdStageContent = () => {
    return (
        <PageContentLayout>
            <TopLine>
                <Title text={'Registration'}/>
                <BodyText type={BodyTextType.REGISTRATION}/>
            </TopLine>
            <Notification/>
            <PhoneNumberContainer>
                <ConfirmedNumber/>
            </PhoneNumberContainer>
            <EmailPasswordForm>
                <BlockContainer>
                    <EmailInput/>
                    <PasswordInput/>
                </BlockContainer>
                <Button primary={true}>Register Now</Button>
            </EmailPasswordForm>
        </PageContentLayout>
    )
}

export default ThirdStageContent;