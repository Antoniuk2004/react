type IndicatorProps = {
    active: boolean;
}

const Indicator = (props: IndicatorProps) => {
    const {active} = props;

    if (active) return (
        <div className="size-3 rounded-full bg-primary"></div>
    );
    else return (
        <div className="size-3 rounded-full border border-gray"></div>
    )
}

export default Indicator;