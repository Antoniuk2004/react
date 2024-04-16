import {LayoutProps} from "../../../../types/LayoutProps.ts";

const HomeTitleLayout = ({children}: LayoutProps) => {
    return (
        <div className="font-['Roboto'] font-normal text-notification text-6xl">
            {children}
        </div>
    )
}

export default HomeTitleLayout;