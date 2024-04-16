import NormalElementLayout from "./NormalElementLayout.tsx";

type ElementProps = {
    option: string;
}

const NormalElement = (props: ElementProps) => {
    const {option} = props;

    return (
        <NormalElementLayout option={option}>
            <span>{option}</span>
        </NormalElementLayout>
    )
}

export default NormalElement;