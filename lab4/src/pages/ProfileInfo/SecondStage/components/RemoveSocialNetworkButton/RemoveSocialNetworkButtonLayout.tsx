import {LayoutProps} from "../../../../../types/LayoutProps.ts";
import {AnimatePresence, motion} from "framer-motion";
import {useContext} from "react";
import {SocialNetworkContext} from "../SecondProfileInfoForm.tsx";

type RemoveSocialNetworkButtonLayoutProps = LayoutProps & {
    isRemoveButtonVisible: boolean;
    index: number;
}

const RemoveSocialNetworkButtonLayout = (props: RemoveSocialNetworkButtonLayoutProps) => {
    const {children, isRemoveButtonVisible, index} = props;
    const {remove} = useContext(SocialNetworkContext);

    return (
        <div className={"absolute right-1 h-full"}>
            <AnimatePresence>
                {isRemoveButtonVisible && <motion.button
                    initial={{scale: 0.7, opacity: 0}}
                    animate={{scale: 1, opacity: 1}}
                    exit={{scale: 0.7, opacity: 0}}
                    transition={{duration: 0.2}}
                    type={"button"}
                    onClick={() => remove(index)}
                    className={"h-full z-50 text-red-400 active:scale-95 flex items-center text-2xl justify-center"}>
                    {children}
                </motion.button>}
            </AnimatePresence>
        </div>
    )
}

export default RemoveSocialNetworkButtonLayout;