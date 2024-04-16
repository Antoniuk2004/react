import {useOpenModal} from "./use-open.ts";
import BackDrop from "./components/BackDrop.tsx";
import Title from "./components/Title.tsx";
import RegistrationModalLayout from "./RegistrationModalLayout.tsx";
import ModalContentLayout from "./components/ModalContentLayout.tsx";
import ModalButton from "./components/ModalButton.tsx";
import ModalBody from "./components/ModalBody/ModalBody.tsx";

const RegistrationModal = () => {
    const {isOpen, setIsOpen} = useOpenModal();

    return (
        <RegistrationModalLayout isOpen={isOpen} setIsOpen={setIsOpen}>
            <BackDrop/>
            <ModalContentLayout>
                <Title text={'Registration successful'}/>
                <ModalBody
                    text={'Your account has been successfully registered.\n' +
                    'You can check your personal data in the console.'}/>
                <ModalButton setIsOpen={setIsOpen}/>
            </ModalContentLayout>
        </RegistrationModalLayout>
    )
}

export default RegistrationModal;