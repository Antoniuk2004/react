import {LayoutProps} from "../../../../../types/LayoutProps.ts";

const PhoneNumberContentLayout = ({children} : LayoutProps) => {
    return (
        <div className="flex flex-col gap-0.5">
            {children}
        </div>
    )
}

export default PhoneNumberContentLayout;