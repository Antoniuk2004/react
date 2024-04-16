import AddSocialNetworkButtonLayout from "./AddSocialNetworkButtonLayout"
import {FaPlus} from "react-icons/fa6";
import IconLayout from "./IconLayout.tsx";

const AddSocialNetworkButton = () => {
    return (
        <AddSocialNetworkButtonLayout>
            <IconLayout>
                <FaPlus/>
            </IconLayout>
            <span>Add More</span>
        </AddSocialNetworkButtonLayout>
    )
}

export default AddSocialNetworkButton;