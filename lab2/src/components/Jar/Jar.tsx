import {ComponentProps} from "../../types/ComponentProps.ts";
import {useJarLoad} from "./useJarLoad.ts";

const Jar = (props: ComponentProps) => {
    useJarLoad(props.data);

    return (
        <div className="jar-container mt-auto relative flex items-center justify-center mb-[20px]">
            <div className="size-[215px] relative">
                <img className="" src="/images/jar_bg.png" alt="jar-background"/>
                <div
                    className="jar-bg absolute bottom-0 left-0 my-margin mx-[calc((100%-155px)/2)] my-[calc((100%-208px)/2)]">
                    <img src={`/images/jar_${props.data.jarPercentage}.png`} alt="jar"/>
                    <img className="absolute bottom-[10px] left-[12px]" src="/images/grid.png" alt=""/>
                    <div
                        className="jar-grid left-[20px] h-[163px] absolute bottom-[15px] flex flex-col text-[10px] text-[#8e5b5b] font-bold">
                        <span className="absolute left-[8px]">{props.data.goal}</span>
                        <span className="absolute bottom-[calc(50%-8px)]">{props.data.goal / 2}</span>
                        <span className="absolute bottom-0">{0}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jar;