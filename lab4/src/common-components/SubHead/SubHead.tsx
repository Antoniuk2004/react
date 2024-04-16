import TopLine from "./components/TopLine.tsx";
import BottomLine from "./components/BottomLine.tsx";
import SubHeadLayout from "./SubHeadLayout.tsx";

type SubHeadProps = {
    topLineText: string;
    bottomLineText: string;
}

const SubHead = (props: SubHeadProps) => {
    const {topLineText, bottomLineText} = props;

    return (
        <SubHeadLayout>
            <TopLine text={topLineText}/>
            <BottomLine text={bottomLineText}/>
        </SubHeadLayout>
    )
}

export default SubHead;