import Logo from "../Logo.tsx";
import Jar from "../Jar/Jar.tsx";
import {ComponentProps} from "../../types/ComponentProps.ts";
import Fields from "../Fields/Fields.tsx";
import JarStats from "../JarStats/JarStats.tsx";

const LeftCanvasSide = (props: ComponentProps) => {
    const {data, setData} = props;

    return (
        <div className="left-side w-1/2 min-h-[680px] bg-gray flex items-center flex-col">
            <Logo/>
            <Jar data={data} setData={setData}/>
            <Fields data={data} setData={setData}/>
            <JarStats data={data} setData={setData}/>
        </div>
    )
}

export default LeftCanvasSide;