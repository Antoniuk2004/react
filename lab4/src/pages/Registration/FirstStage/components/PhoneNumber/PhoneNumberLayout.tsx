import {LayoutProps} from "../../../../../types/LayoutProps.ts";

const PhoneNumberLayout = (props: LayoutProps) => {
    const { children } = props;

    return (
        <div className="flex gap-4 px-4 font-['Roboto'] text-lg text-notification">
            {children}
        </div>
    )
}

export default PhoneNumberLayout;