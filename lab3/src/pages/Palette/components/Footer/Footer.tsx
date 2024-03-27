import {FooterProps} from "./footer-props.ts";

const Footer = (props: FooterProps) => {
    return (
        <div className="w-full text-base px-5 text-gray font-semibold h-12.5 bg-item flex justify-end items-center">
            <span>{props.title}</span>
        </div>
    )
}

export default Footer;