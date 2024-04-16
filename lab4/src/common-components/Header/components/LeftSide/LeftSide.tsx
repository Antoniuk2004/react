import LeftSideLayout from "./LeftSideLayout.tsx";
import LogoSymbol from "../../../Logo/LogoSymbol/LogoSymbol.tsx";
import CompanyName from "../../../Logo/CompanyName/CompanyName.tsx";

const LeftSide = () => {
    return (
        <LeftSideLayout>
            <LogoSymbol/>
            <CompanyName/>
        </LeftSideLayout>
    )
}

export default LeftSide;