const Splitter = (props: {isCardContainerOpened: boolean}) => {
    const {isCardContainerOpened} = props;
    return (
        <div className={`border-t border-add-button' w-full relative text-sm font-medium ${isCardContainerOpened ? 'mt-2 mb-6' : 'my-2'}`}>
            {isCardContainerOpened ? <span className="absolute -top-2.5 left-splitter bg-white px-5">або введіть дані карти</span> : null}
        </div>
    )
}

export default Splitter;