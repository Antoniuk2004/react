import {useTransitionSignal} from "../../../../common-components/Tansition/use-transition-signal.ts";
import {PaletteType} from "../../../Palette/PaletteType.ts";
import {SlideDirection} from "../../../../common-components/Tansition/SlideDirection.ts";

export const handleItemClick = (navigate: any, palette: PaletteType) => {
    const id = palette.id;

    setTimeout(() => navigate(`/palette/${id}`), 750);
    useTransitionSignal.value = SlideDirection.Left;
}