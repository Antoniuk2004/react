import FieldContainer from "../../../../../common-components/FieldContainer.tsx";
import FieldLabelLayout from "../../../../../common-components/FieldLabelLayout.tsx";
import SelectElement from "../../../../../common-components/SelectElement/SelectElement.tsx";
import {useCities} from "./use-cities.ts";
import {SelectType} from "../../../../../types/SelectType.ts";

type CityInputProps = {
    initialValue?: string;
}

const CityInput = (props: CityInputProps) => {
    const {initialValue} = props;
    const cities = useCities();

    return (
        <FieldContainer>
            <FieldLabelLayout>
                <label>City</label>
            </FieldLabelLayout>
            <SelectElement
                initialValue={initialValue}
                type={SelectType.NORMAL}
                options={cities}
                id={'city'}/>
        </FieldContainer>
    )
}

export default CityInput;