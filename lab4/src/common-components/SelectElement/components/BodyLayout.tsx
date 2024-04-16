import {LayoutProps} from "../../../types/LayoutProps.ts";
import {Dispatch, Fragment, SetStateAction} from "react";
import {Combobox, Transition} from "@headlessui/react";

type BodyLayoutProps = LayoutProps & {
    setQuery: Dispatch<SetStateAction<string>>
}

const BodyLayout = (props: BodyLayoutProps) => {
    const {setQuery, children} = props;

    return (
        <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
        >
            <Combobox.Options
                className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ">
                {children}
            </Combobox.Options>
        </Transition>
    )
}

export default BodyLayout;