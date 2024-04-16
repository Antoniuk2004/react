import PageLayout from "../../../common-components/PageLayout.tsx";
import LeftSide from "../../../common-components/Header/components/LeftSide/LeftSide.tsx";
import RightSide from "../../../common-components/Header/components/RightSide/RightSide.tsx";
import Progressbar from "../../../common-components/Header/components/Progressbar/Progressbar.tsx";
import CenterLayout from "../../../common-components/Header/components/Center/CenterLayout.tsx";
import ThirdStageContent from "./ThirdStageContent.tsx";
import {RegistrationPageType, useStageNavigation} from "../../../utils/use-stage-navigation.ts";

const RegistrationThirdStage = () => {
    const checked = useStageNavigation(RegistrationPageType.NORMAL, 3);

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

export default RegistrationThirdStage;