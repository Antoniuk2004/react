import {useEffect, useRef, useState} from "react";
import {countrySignal} from "../FirstProfileInfoForm.tsx";
import {citiesRequest} from "../../../../../api/cities-request.ts";
import {effect} from "@preact/signals-react";
import {useFormContext} from "react-hook-form";
import {tempOptionsSignal} from "../../../../../common-components/SelectElement/temp-options-signal.ts";

export const useCities = () => {
    const [cities, setCities] = useState<string[]>([]);
    const prevCountry = useRef('');
    const {setValue} = useFormContext();

    useEffect(() => {
        const tempOptions = tempOptionsSignal.value
            .find((value) => value.id === 'city');
        if (tempOptions) {
            prevCountry.current = countrySignal.value;
            setCities(tempOptions.options);
        }

        effect(() => {
            const country = countrySignal.value;
            if (!country || country === '') return;
            if (country === prevCountry.current) return;

            prevCountry.current = country;
            citiesRequest(country).then(data => {
                setValue('city', '')
                setCities(data);

                tempOptionsSignal.value = [...tempOptionsSignal.value, {
                    id: 'city',
                    options: data
                }]
            });
        })
    }, [])

    return cities;
}