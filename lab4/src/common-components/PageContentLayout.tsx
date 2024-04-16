import { motion } from "framer-motion";
import {LayoutProps} from "../types/LayoutProps.ts";

const PageContentLayout = ({children}: LayoutProps) => {
    return (
        <motion.div
            className="flex w-full mt-20">
            <div className="flex flex-col justify-center w-full responsive:max-w-full responsive:items-center gap-y-8">
                {children}
            </div>
        </motion.div>
    )
}

export default PageContentLayout;