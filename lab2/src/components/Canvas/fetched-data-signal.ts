import {signal} from "@preact/signals-react";
import {DataType} from "../../types/DataType.ts";

export const fetchedDataSignal = signal<DataType>(
    {
        accumulatedMoney: null,
        jarPercentage: null,
        goal: 25000,
        owner: "Артем К.",
        title: 'На ремонт медеваку',
        description: 'Збираємо на ремонт медеваку для\n' +
            '4ОТБР танкова бригада\n' +
            '\n' +
            'Ремонтуємо дві автівки - Тойоту та Нісан.\n' +
            '\n' +
            'У бригаді є наші Черкащани!\n' +
            '\n' +
            'Ремонт авто треба на вчора! Прохання підтримати!'

    });