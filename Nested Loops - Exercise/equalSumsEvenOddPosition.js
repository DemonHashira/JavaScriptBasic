function equalSums(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let printLine = " ";
    for (let i = firstNum; i <= secondNum; i++) {
        let line = "" + i;
        let oddSum = 0;
        let evenSum = 0;
        for (let j = 0; j < line.length; j++) {
            let currentDigit = Number(line.charAt(j)) 
            if (j % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
         }
        if (oddSum === evenSum) {
        printLine += `${i} `
        }
    }
    console.log(printLine)
}
equalSums(["100000",
"100050"])
