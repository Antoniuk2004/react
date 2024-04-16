import {motion} from "framer-motion";
import {LayoutProps} from "../../../../../../../types/LayoutProps.ts";

const SendAgainButtonLayout = ({children}: LayoutProps) => {
    return (
        <div className="flex items-center">
            <motion.button
                className="flex active:scale-95 hover:brightness-125 duration-200 ease-in-out w-36 h-8 items-center gap-2 font-medium text-primary text-lg leading-6 font-['Roboto']"
                type={"button"}
            >
                {children}
            </motion.button>
        </div>
    )
}

export default SendAgainButtonLayout;