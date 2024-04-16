import {useEffect, useState} from "react";

export const useSelectedDate = (setValue: any) => {
    const [selectedDate, setSelectedDate] = useState(null);

    useEffect(() => {
        setValue("dateOfBirth", selectedDate);
    }, [selectedDate]);

    return {selectedDate, setSelectedDate};
}