import {FooterButtonProps} from "./FooterButtonProps.ts";

const FooterButton = (props: FooterButtonProps) => {
    return (
        <button
            className="flex items-center bg-opacity-100 duration-200 hover:bg-footer-hovered-button gap-x-2 px-4 text-sm h-10 rounded-2xl font-semibold bg-footer-button border border-footer-button">
            <img src={`/images/${props.img}`} alt="Провести розіграш"/>
            <span>{props.title}</span>
        </button>
    )
}

export default FooterButton;