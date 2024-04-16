import {LayoutProps} from "../types/LayoutProps.ts";

type BlockContainerProps = LayoutProps & {
    isMarginBottom?: boolean;
}

const BlockContainer = (props: BlockContainerProps) => {
    const {children, isMarginBottom} = props;

    return (
        <div
            className={`border w-full ${isMarginBottom == null ? 'mb-8' : !isMarginBottom ? '' : 'mb-8'} rounded-lg p-8 responsive:py-0 responsive:px-6 flex flex-col gap-8 border-phone-number responsive:border-none`}>
            {children}
        </div>
    )
}

export default BlockContainer;