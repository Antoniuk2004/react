import {Dialog} from "@headlessui/react";

type TitleProps = {
    text: string;
}

const Title = (props: TitleProps) => {
    const {text} = props;

    return (
        <Dialog.Title
            as="h3"
            className="font-['Poppins'] text-notification text-lg font-bold"
        >
            {text}
        </Dialog.Title>
    )
}

export default Title;