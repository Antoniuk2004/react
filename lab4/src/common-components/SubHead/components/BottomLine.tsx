type BottomLineProps = {
    text: string
}

const BottomLine = ({text}: BottomLineProps) => {
    return (
        <span className="font-['Poppins'] text-xs text-body font-light">
            {text}
        </span>
    )
}

export default BottomLine;