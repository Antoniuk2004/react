import ModalBodyLayout from "./ModalBodyLayout.tsx";

type ModalBodyProps = {
    text: string;
}

const ModalBody = (props: ModalBodyProps) => {
    const {text} = props;

    return (
        <ModalBodyLayout>
            <p>{text}</p>
        </ModalBodyLayout>
    )
}

export default ModalBody;