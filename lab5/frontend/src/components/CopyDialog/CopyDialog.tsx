import CopyDialogLayout from "./CopyDialogLayout";
import {FaCheck} from "react-icons/fa6";
import {useCopyDialogShown} from "./use-copy-dialog-shown.ts";

const CopyDialog = () => {
    const isCopyDialogShown = useCopyDialogShown();

    return (
        <CopyDialogLayout isShown={isCopyDialogShown}>
            <FaCheck/>
            <span>You url was successfully copied to the clipboard</span>
        </CopyDialogLayout>
    )
}

export default CopyDialog;