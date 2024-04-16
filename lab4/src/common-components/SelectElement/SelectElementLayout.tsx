import {Combobox} from "@headlessui/react";
import {Dispatch, SetStateAction} from "react";
import {LayoutProps} from "../../types/LayoutProps.ts";

type SelectElementLayoutProps = LayoutProps & {
    selected: string;
    setSelected: Dispatch<SetStateAction<string>>
    width?: string;
}

const SelectElementLayout = (props: SelectElementLayoutProps) => {
    const {selected, setSelected, children, width} = props;

    return (
        <Combobox value={selected} onChange={setSelected}>
            <div className={`relative ${width ? width : 'w-full'}`}>
                {children}
            </div>
        </Combobox>
    )
}

export default SelectElementLayout;