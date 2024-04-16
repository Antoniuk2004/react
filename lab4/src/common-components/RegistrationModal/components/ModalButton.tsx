import Button from "../../Button.tsx";
import ModalButtonLayout from "./ModalButton/ModalButtonLayout.tsx";
import {Dispatch, SetStateAction} from "react";

type ModalButtonProps = {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ModalButton = (props: ModalButtonProps) => {
    const {setIsOpen} = props;

    return (
        <ModalButtonLayout>
            <Button
                mb={'mb-0'}
                px={'px-10'}
                action={() => setIsOpen(false)}
                primary={true}>
                Okay
            </Button>
        </ModalButtonLayout>
    )
}

export default ModalButton;