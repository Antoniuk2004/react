import {LayoutProps} from "../../../../../types/LayoutProps.ts";
import {useNavigate} from "react-router-dom";

const PencilIconLayout = ({children} : LayoutProps) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate("/registration/1")}
            className="text-2xl cursor-pointer hover:brightness-125 duration-200 ease-in-out size-6 flex items-center justify-center text-primary">
            {children}
        </div>
    )
}

export default PencilIconLayout;