import FieldContainer from "../../../../../common-components/FieldContainer.tsx";
import FieldLabelLayout from "../../../../../common-components/FieldLabelLayout.tsx";
import SelectElement from "../../../../../common-components/SelectElement/SelectElement.tsx";
import {useCountries} from "./use-countries.ts";
import {SelectType} from "../../../../../types/SelectType.ts";

type CountryInputProps = {
    initialValue?: string;
}

const CountryInput = (props: CountryInputProps) => {
    const {initialValue} = props;
    const countries = useCountries();

    return (
        <FieldContainer>
            <FieldLabelLayout>
                <label>Country</label>
            </FieldLabelLayout>
            <SelectElement
                initialValue = {initialValue}
                type={SelectType.NORMAL}
                options={countries}
                id={'country'}/>
        </FieldContainer>
    )
}

export default CountryInput;