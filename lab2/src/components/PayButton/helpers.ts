export const removeAnimationAfterTimePeriod = (element: HTMLElement,
                                               period: number,
                                               animation: string) => {
    setTimeout(() => {
        const parent = element.parentElement;
        if (parent) {
            element.className = element.className.replace(` ${animation} `, '');
        }
    }, period)
}