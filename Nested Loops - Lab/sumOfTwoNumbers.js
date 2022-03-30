function sumOfTwoNumbers (input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);

    let combinationsCounter = 0;
    let flag = false

    for (let i = a; i <= b; i++) {
        for (let j = a; j <= b; j++) {
            combinationsCounter++
            if (i + j == c) {
                console.log(`Combination N:${combinationsCounter} (${i} + ${j} = ${c})`)
                flag = true
                break;
            } 
        }
        if (flag) {
            break;
        }
    }
    if (!flag) {
        console.log (`${combinationsCounter} combinations - neither equals ${c}`)
    }
}
sumOfTwoNumbers(["23",
"24",
"20"])

