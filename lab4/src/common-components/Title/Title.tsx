import TitleLayout from "./TitleLayout.tsx";

type TitleProps = {
    text: string;
}

const Title = (props: TitleProps) => {
    const {text} = props;

    return (
        <TitleLayout>
            <h1>{text}</h1>
        </TitleLayout>
    );
}

export default Title;