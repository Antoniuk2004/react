export const getJustifySelf = (index: number, rows: number) => {
    let positions = ["justify-self-start", "justify-self-center", "justify-self-end"];

    return positions[index % rows];
}