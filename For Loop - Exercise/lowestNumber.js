function lowestNum(input) {
    let n = Number(input[0]);
    let min = Number.POSITIVE_INFINITY
    for (let i = 1; i <= n; i++) {
        let num = Number(input[i]);
        if (num < min) {
            min = num;
        }
    } 
    console.log(min)
}

lowestNum(["4",
"45",
"-20",
"7",
"99"])

