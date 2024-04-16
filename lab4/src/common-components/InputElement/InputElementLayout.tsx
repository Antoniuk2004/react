import {LayoutProps} from "../../types/LayoutProps.ts";

type InputElementLayoutProps = LayoutProps & {
    height?: string;
}

const InputElementLayout = (props: InputElementLayoutProps) => {
    const {children, height} = props;

    return (
        <div className={`${height ? height : 'h-11'} 
        w-full relative flex text-notification font-['Roboto'] text-lg font-normal`}>
            {children}
        </div>
    )
}

export default InputElementLayout;