import {signal} from "@preact/signals-react";
import {ColorFormatEnum} from "./ColorFormatEnum.ts";

export const colorFormatSignal = signal<ColorFormatEnum>(ColorFormatEnum.Hex);