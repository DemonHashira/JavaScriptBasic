function pinCodes (input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);
    let result = "";

    for (let i = 2; i <= a; i += 2) {
        for (let j = 0; j <= b; j++) {
            for (let k = 2; k <= c; k += 2) {
                if (j == 2 || j == 3 || j == 5 || j == 7) {
                    console.log(i + " " + j + " " + k + " ")
                }
            }
        }
    }
}
pinCodes([3,5,5])