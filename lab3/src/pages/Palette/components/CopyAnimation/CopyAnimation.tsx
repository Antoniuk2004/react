import {useCopyAnimation} from "./useCopyAnimation.ts";
import {getRandomTitle, tryToFixBgColor} from "./helpers.ts";

const CopyAnimation = () => {
    const animation = useCopyAnimation();

    if(!animation.isShown) return null;
    else
    return (
        <div
            style={{background: tryToFixBgColor(animation.colorCode)}}
            className="w-full select-none h-screen flex items-center justify-center absolute z-10 text-gray">
            <div className="w-full flex flex-col justify-center items-center py-7.5 bg-title">
                <span className="text-title leading-27.5 font-semibold uppercase text-shadow">{getRandomTitle()}!</span>
            </div>
            <span className="absolute  mt-[320px] text-color-code text-shadow-color-code">{animation.colorCode}</span>
        </div>
    )
}

export default CopyAnimation;