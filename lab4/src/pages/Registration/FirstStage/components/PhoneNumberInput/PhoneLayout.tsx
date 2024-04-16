import { LayoutProps } from "../../../../types/LayoutProps"

const PhoneLayout = (props: LayoutProps) => {
    const { children } = props;

    return (
        <div className="flex gap-4 w-full h-11">
            {children}
        </div>
    )
}

export default PhoneLayout;