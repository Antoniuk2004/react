import {ComponentProps} from "../../types/ComponentProps.ts";
import {Fragment} from "react";

const Fields = (props: ComponentProps) => {
    return (
        <div className="fields flex flex-col items-center">
            <span className="field text-sm font-medium">{props.data.owner} збирає</span>
            <span className="field text-[22px] font-extrabold mt-1">{props.data.title} збирає</span>
            <div className="description mb-[12px] flex flex-col items-center font-medium">
                {props.data.description.split("\n").map((element, index) => (
                    <Fragment key={index}>
                        {element === '' ?
                            <br className=""/>
                            :
                            <span className="text-sm">{element}</span>
                        }
                    </Fragment>
                ))}
            </div>
        </div>
    )
}

export default Fields