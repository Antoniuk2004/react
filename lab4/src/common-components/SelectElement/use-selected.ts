import {useEffect, useState} from "react";
import {countrySignal} from "../../pages/ProfileInfo/FirstStage/components/FirstProfileInfoForm.tsx";
import {useFormContext} from "react-hook-form";

export const useSelected = (id: string) => {
    const [selected, setSelected] = useState('');
    const {setValue} = useFormContext();

    useEffect(() => {
        if (id === 'country') {
            countrySignal.value = selected;
        }

        setValue(id, selected);
    }, [selected]);

    return {selected, setSelected};
}