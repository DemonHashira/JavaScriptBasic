function combinations (input) {
    let num = Number(input[0]);
    let validCounter = 0
    for (let i = 0; i <= num; i++) {
        for (let j = 0; j <= num; j++) {
            for (let k = 0; k <= num; k++) {
                if (i + j + k == num) {
                    validCounter++
                    
                }
            }
        }
    }
    console.log(validCounter)
}
combinations([25])