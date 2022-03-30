function tournament (input) {
    let daysTournament = Number(input[0]);
    let totalMoney = 0;
    let dailyMoney = 0
    let winDayCounter = 0;
    let loseDayCounter = 0;
    let winCounter = 0;
    let loseCounter = 0;

    for (let index = 1; index < input.length; index++) {
        if (input[index] === "win") {
            winCounter++
            dailyMoney += 20
        } else if (input[index] === "lose") {
            loseCounter++
        }

        if (input[index] === "Finish") {
            if (winCounter > loseCounter) {
                winDayCounter++
                dailyMoney = dailyMoney + dailyMoney * 0.1 
                totalMoney += dailyMoney
                winCounter = 0;
                dailyMoney = 0;
                loseCounter = 0;
            } else {
                loseDayCounter++
                totalMoney += dailyMoney
                winCounter = 0;
                dailyMoney = 0;
                loseCounter = 0
            }
        }
    } 
    if (winDayCounter > loseDayCounter) {
        let bonus = totalMoney + totalMoney * 0.2
        console.log(`You won the tournament! Total raised money: ${bonus.toFixed(2)}`)
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`)
    }
}
tournament([
    "3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"
])






























