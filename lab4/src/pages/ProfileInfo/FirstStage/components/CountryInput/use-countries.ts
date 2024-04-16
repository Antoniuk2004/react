import {useEffect, useState} from "react";
import {countriesRequest} from "../../../../../api/countries-request.ts";
import {tempOptionsSignal} from "../../../../../common-components/SelectElement/temp-options-signal.ts";

export const useCountries = () => {
    const [countries, setCountries] = useState<string[]>([]);

    useEffect(() => {
        const tempOptions = tempOptionsSignal.value
            .find((value) => value.id === 'country');
        if(tempOptions) {
            setCountries(tempOptions.options);
            return;
        }

        const fetchCountries = async () => {
            const countries = await countriesRequest();
            setCountries(countries);

            tempOptionsSignal.value = [...tempOptionsSignal.value, {
                id: 'country',
                options: countries
            }]
        }

        fetchCountries();
    }, []);

    return countries;
}