import {motion} from "framer-motion";
import {LayoutProps} from "../types/LayoutProps.ts";

const PageLayout = ({children}: LayoutProps) => {
    return (
        <motion.div

            className="pt-11 px-11 responsive:pt-0 responsive:px-0">
            <div className="flex relative items-start justify-between responsive:p-2 responsive:pl-6 responsive:items-center">
                {children}
            </div>
        </motion.div>
    )
}

export default PageLayout;