import {LayoutProps} from "../../../../../../types/LayoutProps.ts";

type AgreementTextLayoutProps = LayoutProps & {
    color?: string;
    weight?: string;
    handleClick?: () => void;
    cursor?: string;
}

const AgreementTextLayout = (props: AgreementTextLayoutProps) => {
    const {children, color, weight, cursor, handleClick} = props;

    return (
        <div
            onClick={handleClick}
            className={`
            ${weight ? weight : 'font-normal'} 
            ${color ? color : 'text-notification'} 
            ${cursor ? cursor : 'cursor-auto'}
            text-base font-['Roboto']`}>
            {children}
        </div>
    )
}

export default AgreementTextLayout;