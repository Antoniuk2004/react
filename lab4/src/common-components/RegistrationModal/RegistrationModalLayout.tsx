import {LayoutProps} from "../../types/LayoutProps.ts";
import {Dispatch, Fragment, SetStateAction} from "react";
import {Dialog, Transition} from "@headlessui/react";

type RegistrationModalLayoutProps = LayoutProps & {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    isOpen: boolean;
}

const RegistrationModalLayout = (props: RegistrationModalLayoutProps) => {
    const {children, isOpen, setIsOpen} = props;

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
                {children}
            </Dialog>
        </Transition>
    )
}

export default RegistrationModalLayout;