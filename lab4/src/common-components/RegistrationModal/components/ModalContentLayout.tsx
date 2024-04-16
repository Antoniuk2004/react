import {LayoutProps} from "../../../types/LayoutProps.ts";
import {Fragment} from "react";
import {Dialog, Transition} from "@headlessui/react";

const ModalContentLayout = ({children}: LayoutProps) => {
    return (
        <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Dialog.Panel
                        className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        {children}
                    </Dialog.Panel>
                </Transition.Child>
            </div>
        </div>
    )
}

export default ModalContentLayout;