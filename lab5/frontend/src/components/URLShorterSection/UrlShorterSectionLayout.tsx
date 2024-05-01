import {LayoutProps} from "../../types/LayoutProps.ts";

const UrlShorterSectionLayout = ({children} : LayoutProps) => {
    return (
        <section className={"text-neutral-700 mx-2 shadow px-8 pt-2.5 pb-1.5 rounded-md bg-white"}>
            {children}
        </section>
    )
}

export default UrlShorterSectionLayout;