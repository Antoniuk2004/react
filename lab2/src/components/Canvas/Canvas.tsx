import LeftCanvasSide from "../LeftCanvasSide/LeftCanvasSide.tsx";
import RightCanvasSide from "../RightCanvasSide/RightCanvasSide.tsx";
import {useMoney} from "./use-effects/useMoney.ts";
import {Loader} from "../Loader/Loader.tsx";
import {useRef, useState} from "react";
import {useLoader} from "./use-effects/useLoader.ts";
import {useMoneyInputFocus} from "./use-effects/useMoneyInputFocus.ts";
import {fetchedDataSignal} from "./fetched-data-signal.ts";
import {useFetchedData} from "./use-effects/useFetchedData.ts";

const Canvas = () => {
    const [data, setData] = useState(fetchedDataSignal.value);
    const [loaded, setLoaded] = useState(false);
    const moneyInputRef = useRef<HTMLDivElement | null>(null);
    useFetchedData(setData);
    useMoney();
    useMoneyInputFocus(moneyInputRef.current, loaded);
    useLoader(setLoaded, data)

    return (
        <div className="canvas min-h-[680px] overflow-hidden bg-white rounded-3xl">
            {loaded ? null : <Loader/>}
            <div
                className={`flex ${loaded ? '' : 'hidden'}`}>
                <LeftCanvasSide data={data} setData={setData}/>
                <RightCanvasSide setData={setData} moneyInputRef={moneyInputRef}/>
            </div>
        </div>
    )
}

export default Canvas;