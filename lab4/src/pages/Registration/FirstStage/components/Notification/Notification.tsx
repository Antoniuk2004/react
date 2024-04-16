import NotificationLayout from "./NotificationLayout.tsx";
import {MdClose, MdLock} from "react-icons/md";
import NotificationMessage from "./components/NotificationMessage/NotificationMessage.tsx";
import NotificationIconLayout from "./components/NotificationIconLayout.tsx";
import {useNotification} from "./useNotification.ts";

const Notification = () => {
    const isVisible = useNotification();

    return (
        <NotificationLayout isVisible={isVisible}>
            <NotificationIconLayout>
                <MdLock/>
            </NotificationIconLayout>
            <NotificationMessage/>
            <NotificationIconLayout isCursorPointer={true}>
                <MdClose/>
            </NotificationIconLayout>
        </NotificationLayout>
    )
}

export default Notification;