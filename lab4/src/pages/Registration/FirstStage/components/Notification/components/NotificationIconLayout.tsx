import {notificationSignal} from "../useNotification.ts";
import {LayoutProps} from "../../../../../../types/LayoutProps.ts";

type NotificationIconLayoutProps = LayoutProps & {
    isCursorPointer?: boolean;
}

const NotificationIconLayout = (props: NotificationIconLayoutProps) => {
    const {children, isCursorPointer} = props;

    return (
        <div
            onClick={() => notificationSignal.value = false}
            className={`text-2xl h-fit text-notification-icon ${isCursorPointer ? 'cursor-pointer hover:brightness-125 duration-200 ease-in-out' : ''}`}>
            {children}
        </div>
    )
}

export default NotificationIconLayout;