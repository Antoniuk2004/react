import {IoVolumeMediumSharp, IoVolumeMute} from "react-icons/io5";
import {handleButtonClick} from "./handlers.ts";
import {useVolume} from "./useVolume.ts";

const SoundButton = () => {
    const isSoundTurnedOn = useVolume();

    return (
        <div
            className="flex basis-1/3 justify-end ">
            <div className="flex cursor-pointer items-center gap-x-1 capitalize" onClick={handleButtonClick}>
                <span>sound</span>
                <span>{isSoundTurnedOn ? 'on' : 'off'}</span>
                {isSoundTurnedOn ? <IoVolumeMediumSharp/> : <IoVolumeMute/>}
            </div>
        </div>
    )
}

export default SoundButton;