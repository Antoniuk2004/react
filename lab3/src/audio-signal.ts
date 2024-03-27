import {signal} from "@preact/signals-react";

export const audioSignal = signal<HTMLAudioElement | null>(null);