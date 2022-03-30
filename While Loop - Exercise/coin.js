function coin (input) {
    let moneyResto = Number(input[0]);
    let moneyCounter = 0;
    let money = Math.floor(moneyResto * 100)

    while (money > 0) {
        if (money >= 200) {
            money -= 200;
            moneyCounter++
        } else if (money >= 100) {
            money -= 100
            moneyCounter++
        } else if (money >= 50) {
            money -= 50
            moneyCounter++
        } else if (money >= 20) {
            money -= 20
            moneyCounter++
        } else if (money >= 10) {
            money -= 10;
            moneyCounter++
        } else if (money >= 5) {
            money -= 5;
            moneyCounter++
        } else if (money >= 2) {
            money -= 2;
            moneyCounter++
        } else if (money >= 1) {
            money -= 1
            moneyCounter++
        }
    }
    console.log(moneyCounter)
}
coin(["2.73"])