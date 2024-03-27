import {PaletteType} from "./PaletteType.ts";

export const getPaletteIndex = (arrOfPalettes: PaletteType[], id: string): number => {
    let index = -1;

    arrOfPalettes.map((elem, i) =>
        elem.id === id ? index = i : null);

    return index;
}