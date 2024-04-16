import {LayoutProps} from "../../../../types/LayoutProps.ts";

const ModalBodyLayout = ({children} : LayoutProps) => {
    return (
        <div className={"text-sm text-notification mt-2 font-['Roboto']"}>
            {children}
        </div>
    )
}

export default ModalBodyLayout;