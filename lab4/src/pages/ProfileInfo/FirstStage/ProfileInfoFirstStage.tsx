import LeftSide from "../../../common-components/Header/components/LeftSide/LeftSide.tsx";
import CenterLayout from "../../../common-components/Header/components/Center/CenterLayout.tsx";
import Progressbar from "../../../common-components/Header/components/Progressbar/Progressbar.tsx";
import RightSide from "../../../common-components/Header/components/RightSide/RightSide.tsx";
import PageLayout from "../../../common-components/PageLayout.tsx";
import FirstStageContent from "./FirstStageContent.tsx";
import {useNavigate} from "react-router-dom";
import {appDataSignal} from "../../../App.tsx";
import {RegistrationPageType, useStageNavigation} from "../../../utils/use-stage-navigation.ts";

const ProfileInfoFirstStage = () => {
    const checked = useStageNavigation(RegistrationPageType.PERSONAL_INFO, 1);


    if (!checked) return null;
    console.log('');

    return (
        <PageLayout>
            <LeftSide/>
            <CenterLayout>
                <Progressbar stage={1}/>
                <FirstStageContent/>
            </CenterLayout>
            <RightSide/>
        </PageLayout>
    )
}

export default ProfileInfoFirstStage;