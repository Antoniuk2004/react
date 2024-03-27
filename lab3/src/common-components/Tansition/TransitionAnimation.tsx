import {useAnimation} from "./useAnimation.ts";
import {SlideDirection} from "./SlideDirection.ts";

const TransitionAnimation = () => {
    const animation = useAnimation();

    if (animation === SlideDirection.None) return null;
    else return (
        <div className="w-full absolute z-10 bg-transparent h-screen left-0 top-0 overflow-hidden">
            <div className={`absolute ${animation === SlideDirection.Left ? 'animate-slideToLeft' : 'animate-slideToRight'} bg-animation left-100 top-0 w-full h-screen`}></div>
        </div>
    )
}

export default TransitionAnimation;