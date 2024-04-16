import {LayoutProps} from "../types/LayoutProps.ts";

type ButtonProps = LayoutProps & {
    primary?: boolean;
    action?: () => void;
    fontSize?: string;
    px?: string;
    py?: string;
    mb?: string;
}

const Button = (props: ButtonProps) => {
    const {children, primary, action, fontSize, px, py, mb} = props;

    return (
        <button
            onClick={() => action && action()}
            className={`
            ${fontSize ? fontSize : 'text-base'}
            ${primary ? 'text-white bg-primary px-8' : 'border border-b-phone-number text-notification'} 
            w-fit focus:outline-0 flex gap-2 items-center px-6 active:scale-95 ease-in-out rounded font-['Poppins']  font-medium text-center h-12
            ${mb ? mb : 'mb-8'}
            ${px ? px : ''}
            ${py ? py : ''}
            `}
            type="submit"
        >
            {children}
        </button>
    )
}

export default Button;