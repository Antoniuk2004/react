export const checkIfDigit = (char: string) => {
    const pattern = /^(null|[0-9])$/;
    return pattern.test(char);
}

export const formatNumber = (num: string, separate: number, reverse: boolean) => {
    let newNum = "";
    if (!reverse) {
        for (let i = 0; i < num.length; i += separate) {
            newNum += num.substring(i, i + separate);
            if (i !== num.length - 1 && i + 4 < num.length) {
                newNum += " ";
            }
        }
    } else {
        for (let i = num.length; i > 0; i -= separate) {
            newNum = num.substring(i - separate, i) + newNum;
            if (i - separate > 0) {
                newNum = " " + newNum;
            }
        }
    }

    return newNum;
}

export const replaceAll = (value: string,
                           searchValue: string | RegExp,
                           replaceValue: string) => {
    return value.split(searchValue).join(replaceValue);
}