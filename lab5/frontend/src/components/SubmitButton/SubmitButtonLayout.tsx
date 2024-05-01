import {LayoutProps} from "../../types/LayoutProps";

const SubmitButtonLayout = ({children}: LayoutProps) => {
    return (
        <button
            type={"submit"}
            className={"text-white bg-purple-500 px-4 py-3.5 text-lg font-bold whitespace-nowrap rounded-r-md"}>
            {children}
        </button>
    )
}

export default SubmitButtonLayout;