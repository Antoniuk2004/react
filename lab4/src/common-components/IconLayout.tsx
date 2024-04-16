import {LayoutProps} from "../types/LayoutProps.ts";

type IconLayoutProps = LayoutProps & {
    size: string;
    textSize: string;
}

const IconLayout = (props: IconLayoutProps) => {
    const {children, size, textSize} = props;

    return (
        <div className={`${textSize} ${size} flex items-center justify-center`}>
            {children}
        </div>
    )
}

export default IconLayout;