type TopLineProps = {
    text: string;
}

const TopLine = ({text}: TopLineProps) => {
    return (
        <span className="font-['Poppins'] text-notification font-semibold text-xl">
            {text}
        </span>
    )
}

export default TopLine;