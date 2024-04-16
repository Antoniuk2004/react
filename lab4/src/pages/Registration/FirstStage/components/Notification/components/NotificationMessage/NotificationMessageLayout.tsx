import {LayoutProps} from "../../../../../../types/LayoutProps.ts";

const NotificationMessageLayout = ({children}: LayoutProps) => {
    return (
        <div className="font-normal font-['Poppins'] text-sm leading-4.5 text-notification">
            {children}
        </div>
    )
}

export default NotificationMessageLayout;