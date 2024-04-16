import {AnimatePresence, motion} from "framer-motion";
import {LayoutProps} from "../../../../../types/LayoutProps.ts";

type NotificationLayoutProps = LayoutProps & {
    isVisible: boolean;
}

const NotificationLayout = (props: NotificationLayoutProps) => {
    const {children, isVisible} = props;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.2}}
                    className="bg-notification responsive:px-6 rounded-lg p-4 responsive:rounded-none flex gap-4">
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default NotificationLayout;