function breakVacation (input) {
    let index = 0;
    let excursionMoney = Number(input[index]);
    index++
    let money = Number(input[index])
    index++
    let daycounter = 0;
    let counter = 0 
    while (money < excursionMoney) {
        daycounter++
        let action = input[index]
        index++
        let tempMoney = Number(input[index]);
        index++

        if (action === "spend") {
            money -= tempMoney;
            if (money < 0) {
                money = 0;
            }
            counter++
        } else {
            money += tempMoney
            counter = 0;
        }
        if (counter === 5) {
            console.log(`You can't save the money.`);
            console.log(daycounter);
            break;
        }
    }
    if (money >= excursionMoney) {
        console.log(`You saved the money for ${daycounter} days.`);
    }
}
breakVacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])


