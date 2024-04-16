import {LayoutProps} from "../../../../types/LayoutProps.ts";

const ModalButtonLayout = ({children}: LayoutProps) => {
    return (
        <div className="mt-4">
            {children}
        </div>
    );
}

export default ModalButtonLayout;