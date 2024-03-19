import {ComponentProps} from "../../types/ComponentProps.ts";

const JarStats = (props: ComponentProps) => {
    return (
        <div className="mt-4 flex bg-white rounded-2xl mb-auto py-[12px]">
            {props.data.accumulatedMoney !== null && props.data.accumulatedMoney > 0 ?
                <div className="flex px-5 border-[#ccc] border-r-[0.5px] ">
                    <img className="mr-4" src="/images/collected.svg" alt=""/>
                    <div className="flex flex-col">
                        <span className="leading-4 first-letter:capitalize text-[#808080]">накопичено</span>
                        <span className="leading-6 font-medium text-nowrap">{props.data.accumulatedMoney} ₴</span>
                    </div>
                </div>
                : null
            }
            <div className="flex px-5">
                <img className="mr-4" src="/images/target.svg" alt=""/>
                <div className="flex flex-col">
                    <span className="leading-4 first-letter:capitalize text-[#808080]">ціль</span>
                    <span className="leading-6 font-medium text-nowrap">{props.data.goal} ₴</span>
                </div>
            </div>
        </div>
    )
}

export default JarStats;