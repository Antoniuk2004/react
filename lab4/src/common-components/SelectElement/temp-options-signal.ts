import {signal} from "@preact/signals-react";

type OptionValue = {
    id: string;
    options: any[];
}

export const tempOptionsSignal = signal<OptionValue[]>([]);