import {ReactNode} from "react";
import {Combobox} from "@headlessui/react";
import {LayoutProps} from "../../../../types/LayoutProps.ts";
import {
    SocialNetwork
} from "../../social-network-options.tsx";

type ElementLayoutProps = LayoutProps & {
    children: ReactNode;
    option: SocialNetwork;
}

const NetworkElementLayout = (props: ElementLayoutProps) => {
    const {option, children} = props;

    return (
        <Combobox.Option
            className={({active, selected}) => `relative flex items-center gap-2 font-['Roboto'] text-notification font-light cursor-pointer select-none px-2 py-1
            ${active ? 'bg-gray text-white' : 'text-gray-900'}
            ${selected ? 'bg-gray text-white' : ''}
            `}
            value={option.name}
        >
            {children}
        </Combobox.Option>
    )
}

export default NetworkElementLayout;