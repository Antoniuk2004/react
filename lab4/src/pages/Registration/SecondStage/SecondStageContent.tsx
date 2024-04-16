import TopLine from "../../../common-components/TopLine.tsx";
import Title from "../../../common-components/Title/Title.tsx";
import BodyText, {BodyTextType} from "../../../common-components/BodyText/BodyText.tsx";
import Notification from "../FirstStage/components/Notification/Notification.tsx";
import PageContentLayout from "../../../common-components/PageContentLayout.tsx";
import PhoneNumberContent from "./components/PhoneNumberContent/PhoneNumberContent.tsx";
import PhoneNumberContainer from "../../../common-components/PhoneNumberContainer.tsx";
import PencilIcon from "./components/PencilIcon/PencilIcon.tsx";
import CodeConfirmation from "./components/CodeConfirmation/CodeConfirmation.tsx";
import ConfirmationCodeForm from "./components/ConfirmationCodeForm.tsx";
import Button from "../../../common-components/Button.tsx";
import {HandleConfirmButtonClick} from "./handlers.ts";

const SecondStageContent = () => {

    return (
        <PageContentLayout>
            <TopLine>
                <Title text={'Registration'}/>
                <BodyText type={BodyTextType.REGISTRATION}/>
            </TopLine>
            <Notification/>
            <PhoneNumberContainer>
                <PhoneNumberContent/>
                <PencilIcon/>
            </PhoneNumberContainer>
            <ConfirmationCodeForm>
                <CodeConfirmation/>
                <Button>Confirm</Button>
            </ConfirmationCodeForm>
        </PageContentLayout>
    )
}

export default SecondStageContent;