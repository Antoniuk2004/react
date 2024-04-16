import {LayoutProps} from "../types/LayoutProps.ts";

const PhoneNumberContainer = ({children}: LayoutProps) => {
    return (
        <div className="flex responsive:px-6 responsive:border-none responsive:bg-light-cyan responsive:rounded-none responsive:w-full border rounded-lg justify-between items-end border-phone-number p-4 gap-4">
            {children}
        </div>
    )
}

export default PhoneNumberContainer;