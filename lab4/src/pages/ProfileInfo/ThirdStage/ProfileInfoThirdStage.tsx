import LeftSide from "../../../common-components/Header/components/LeftSide/LeftSide.tsx";
import CenterLayout from "../../../common-components/Header/components/Center/CenterLayout.tsx";
import Progressbar from "../../../common-components/Header/components/Progressbar/Progressbar.tsx";
import RightSide from "../../../common-components/Header/components/RightSide/RightSide.tsx";
import PageLayout from "../../../common-components/PageLayout.tsx";
import ThirdStageContent from "./ThirdStageContent.tsx";
import {appDataSignal} from "../../../App.tsx";
import {RegistrationPageType, useStageNavigation} from "../../../utils/use-stage-navigation.ts";

const ProfileInfoThirdStage = () => {
    const checked = useStageNavigation(RegistrationPageType.PERSONAL_INFO, 3);

    if (!checked) return null;
    return (
        <PageLayout>
            <LeftSide/>
            <CenterLayout>
                <Progressbar stage={3}/>
                <ThirdStageContent/>
            </CenterLayout>
            <RightSide/>
        </PageLayout>
    )
}

export default ProfileInfoThirdStage;