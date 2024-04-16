import ProgressbarLayout from "./ProgressbarLayout.tsx";
import Indicator from "./components/Indicator.tsx";
import Line from "./components/Line.tsx";

type ProgressbarProps = {
    stage: number;
}

const Progressbar = (props: ProgressbarProps) => {
    const {stage} = props;

    if (stage == 1)
        return (
            <ProgressbarLayout>
                <Indicator active={true}/>
                <Line active={false}/>
                <Indicator active={false}/>
                <Line active={false}/>
                <Indicator active={false}/>
            </ProgressbarLayout>
        )
    else if (stage == 2)
        return (
            <ProgressbarLayout>
                <Indicator active={true}/>
                <Line active={true}/>
                <Indicator active={true}/>
                <Line active={false}/>
                <Indicator active={false}/>
            </ProgressbarLayout>
        )
    else if (stage == 3)
        return (
            <ProgressbarLayout>
                <Indicator active={true}/>
                <Line active={true}/>
                <Indicator active={true}/>
                <Line active={true}/>
                <Indicator active={true}/>
            </ProgressbarLayout>
        )
    else return null;
}

export default Progressbar;