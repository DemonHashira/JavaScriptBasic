function maxNum (input) {
    let n = Number(input[0]);
    let max = Number.NEGATIVE_INFINITY;

    for (let i = 1; i <= n; i++) {
        let num = Number(input[i]);
        if (num > max) {
            max = num;
        }
    }
    console.log(max)
}
maxNum([2,
    100,
    99])