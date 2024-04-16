import PageLayout from "../../../common-components/PageLayout.tsx";
import LeftSide from "../../../common-components/Header/components/LeftSide/LeftSide.tsx";
import RightSide from "../../../common-components/Header/components/RightSide/RightSide.tsx";
import Progressbar from "../../../common-components/Header/components/Progressbar/Progressbar.tsx";
import CenterLayout from "../../../common-components/Header/components/Center/CenterLayout.tsx";
import FirstStageContent from "./FirstStageContent.tsx";
import {appDataSignal} from "../../../App.tsx";
import {useNavigate} from "react-router-dom";


const RegistrationFirstStage = () => {
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

export default RegistrationFirstStage;