export const sortObjectProperties = (obj: any, desiredOrder: string[]) => {
    const sortedEntries = Object.entries(obj).sort((a, b) =>
        desiredOrder.indexOf(a[0]) - desiredOrder.indexOf(b[0]));
    return Object.fromEntries(sortedEntries);
}

export const findMessage = (obj: any) => {
    if (typeof obj !== 'object' || obj === null) {
        return null;
    }

    if (obj.hasOwnProperty('message')) {
        return obj.message;
    }

    for (const key in obj) {
        const nestedMessage = findMessage(obj[key]);
        if (nestedMessage !== null) {
            return nestedMessage;
        }
    }

    return null;
}