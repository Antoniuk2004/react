type LineProps = {
    active: boolean;
}

const Line = (props: LineProps) => {
    const {active} = props;

    if(active) return (
        <div className="w-10 border border-primary"></div>
    )
    else return (
        <div className="w-10 border border-gray"></div>
    )
}

export default Line;