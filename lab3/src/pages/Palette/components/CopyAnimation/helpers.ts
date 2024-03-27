import {colorFormatSignal} from "../Header/components/ColorFormatButton/color-format-signal.ts";
import {ColorFormatEnum} from "../Header/components/ColorFormatButton/ColorFormatEnum.ts";

export const getRandomTitle = () => {
    const titles = ['right one', 'copied', 'paste me', 'got it', 'it\'ll rock', 'will do'];

    const randomIndex = Math.floor(Math.random() * titles.length);

    return titles[randomIndex];
}

const convertToRgb = (colorCode: string) => {
    const r = parseInt(colorCode.slice(1, 3), 16);
    const g = parseInt(colorCode.slice(3, 5), 16);
    const b = parseInt(colorCode.slice(5, 7), 16);

    return [r, g, b];
}

export const formatColor = (colorCode: string) => {
    switch (colorFormatSignal.value) {
        case ColorFormatEnum.Hex:
            return colorCode;
        case ColorFormatEnum.Hex_Without_Hash:
            return colorCode.slice(1, colorCode.length);
        case ColorFormatEnum.RGB:
            let rgb = convertToRgb(colorCode);
            return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
        case ColorFormatEnum.RGBA:
            const x = convertToRgb(colorCode);
            return `rgba(${x[0]}, ${x[1]}, ${x[2]}, 1.0)`;
    }
}

export const tryToFixBgColor = (colorCode: string) => {
    if(colorFormatSignal.value === ColorFormatEnum.Hex_Without_Hash){
        return "#" + colorCode;
    }
    return colorCode;
}