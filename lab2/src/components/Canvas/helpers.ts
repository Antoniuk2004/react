export const calcPercentage = (money: number, goal: number) => {
    let percentage = money * 100 / goal;

    if (percentage === 0) percentage = 0;
    else if (percentage > 0 && percentage < 50) percentage = 33;
    else if (percentage >= 50 && percentage < 100) percentage = 50;
    else percentage = 100;

    return percentage;
}