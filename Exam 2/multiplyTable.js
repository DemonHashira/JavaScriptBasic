function multiplyTable(input) {
    let n = Number(input[0]);

    let firstNumber = n % 10;
    let secondNumber = (n / 10) % 10
    let thirdNumber = n / 100

    for (let i = 1; i <= firstNumber; i++) {
        for (let j = 1; j <= secondNumber; j++) {
            for (let k = 1; k <= thirdNumber; k++) {
                console.log(`${i} * ${j} * ${k} = ${i * j * k};`)
            }
        }
    }
}
multiplyTable([342])