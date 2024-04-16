import TopLine from "../../../common-components/TopLine.tsx";
import Title from "../../../common-components/Title/Title.tsx";
import BodyText, {BodyTextType} from "../../../common-components/BodyText/BodyText.tsx";
import Notification from "./components/Notification/Notification.tsx";
import PhoneInputForm from "./components/PhoneInputForm.tsx";
import PhoneNumberInput from "./components/PhoneNumberInput/PhoneNumberInput.tsx";
import PageContentLayout from "../../../common-components/PageContentLayout.tsx";
import Button from "../../../common-components/Button.tsx";

const FirstStageContent = () => {
    return (
        <PageContentLayout>
            <TopLine>
                <Title text={'Registration'}/>
                <BodyText type={BodyTextType.REGISTRATION}/>
            </TopLine>
            <Notification/>
            <PhoneInputForm>
                <PhoneNumberInput/>
                <Button>Send Code</Button>
            </PhoneInputForm>
        </PageContentLayout>
    )
}

export default FirstStageContent;