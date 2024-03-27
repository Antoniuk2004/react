import BackButton from "./components/BackButton/BackButton.tsx";
import ColorFormatButton from "./components/ColorFormatButton/ColorFormatButton.tsx";
import SoundButton from "./components/SoundButton/SoundButton.tsx";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className="flex items-center px-5 bg-item h-12.5 text-gray font-semibold text-base capitalize">
            <BackButton navigate={navigate}/>
            <ColorFormatButton/>
            <SoundButton/>
        </div>
    )
}

export default Header