import {LayoutProps} from "../types/LayoutProps.ts";

type InputsSeparatorProps = LayoutProps & {
    visibilitySetter?: (value: boolean) => void;
}

const InputsSeparator = (props: InputsSeparatorProps) => {
    const {children, visibilitySetter} = props;

    return (
        <div
            onMouseOver={() => visibilitySetter && visibilitySetter(true)}
            onMouseOut={() => visibilitySetter && visibilitySetter(false)}
            className="grid relative grid-cols-2 gap-x-8">
            {children}
        </div>
    )
}

export default InputsSeparator;