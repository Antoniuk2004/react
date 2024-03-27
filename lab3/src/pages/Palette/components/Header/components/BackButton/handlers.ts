import {useTransitionSignal} from "../../../../../../common-components/Tansition/use-transition-signal.ts";
import {SlideDirection} from "../../../../../../common-components/Tansition/SlideDirection.ts";

export const handleButtonClick = (navigate: any) => {
    setTimeout(() => navigate(`/`), 600);
    useTransitionSignal.value = SlideDirection.Right;
}