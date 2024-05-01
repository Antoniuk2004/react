import {AnimatePresence, motion} from "framer-motion";
import {LayoutProps} from "../../types/LayoutProps.ts";

type CopyDialogLayoutProps = LayoutProps & {
    isShown: boolean;
}

const CopyDialogLayout = (props: CopyDialogLayoutProps) => {
    const {children, isShown} = props;

    return (
        <div className={"absolute bottom-0 right-0 mr-4 mb-4 text-green-500 z-10"}>
            <AnimatePresence>
                {isShown && (
                    <motion.div
                        initial={{opacity: 0, x: 16}}
                        animate={{opacity: 1, x: 0}}
                        exit={{opacity: 0, x: 16}}
                        transition={{duration: 0.2}}
                        className={"bg-white rounded-md flex gap-x-2 items-center text-lg p-4"}>
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default CopyDialogLayout;