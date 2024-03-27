import {useLocation} from "react-router-dom";
import {useId} from "./use-effects/useId.ts";
import ErrorPage from "../ErrorPage/ErrorPage.tsx";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import PaletteGrid from "./components/PaletteGrid/PaletteGrid.tsx";
import {getPaletteIndex} from "./helpers.ts";
import paletteData from "../../../public/data/pallete.json";
import CopyAnimation from "./components/CopyAnimation/CopyAnimation.tsx";
import {PaletteType} from "./PaletteType.ts";

const Palette = () => {
    const location = useLocation();
    const id = useId(location);

    const palette: PaletteType[] = paletteData;
    if (typeof (id) !== "string") return null;
    const index = getPaletteIndex(palette, id);

    if (index === -1) return <ErrorPage/>
    return (
        <div className="h-screen w-full bg-item">
            <CopyAnimation/>
            <Header/>
            <PaletteGrid palette={palette[index]}/>
            <Footer title={palette[index].paletteName}/>
        </div>
    )
}

export default Palette;