import PageLayout from "../../../common-components/PageLayout.tsx";
import LeftSide from "../../../common-components/Header/components/LeftSide/LeftSide.tsx";
import RightSide from "../../../common-components/Header/components/RightSide/RightSide.tsx";
import Progressbar from "../../../common-components/Header/components/Progressbar/Progressbar.tsx";
import CenterLayout from "../../../common-components/Header/components/Center/CenterLayout.tsx";
import SecondStageContent from "./SecondStageContent.tsx";
import {RegistrationPageType, useStageNavigation} from "../../../utils/use-stage-navigation.ts";

const RegistrationSecondStage = () => {
    const checked = useStageNavigation(RegistrationPageType.NORMAL, 2);

    if(!checked) return null;
    return (
        <PageLayout>
            <LeftSide/>
            <CenterLayout>
                <Progressbar stage={2}/>
                <SecondStageContent/>
            </CenterLayout>
            <RightSide/>
        </PageLayout>
    )
}

export default RegistrationSecondStage;