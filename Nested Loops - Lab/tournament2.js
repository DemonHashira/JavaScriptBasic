
function christmasTournament(input){
    let days = Number(input[0]);
    let money = 0;
    let dailyMoney = 0; 
    let gameWon = 0;
    let gameLost = 0; 
    let daysWon = 0;
    let daysLost = 0; 
    
    for (let i = 1; i < input.length; i++){
        if (input[i] === "win"){
            dailyMoney += 20;
            gameWon++;
        } else if (input[i] === "lose"){
            gameLost++; 
        } 

        if (input[i] === "Finish"){
            if (gameWon > gameLost){
                daysWon++;
                dailyMoney = dailyMoney + dailyMoney * 0.1;
                money += dailyMoney;
                dailyMoney = 0; 
                gameWon = 0;
                gameLost = 0;
            } else {
                daysLost++;
                money += dailyMoney;
                dailyMoney = 0;
                gameWon = 0;
                gameLost = 0;
            } 
        }
    }

    if (daysWon > daysLost){
        let bonus = money + money * 0.2;
        console.log(`You won the tournament! Total raised money: ${bonus.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${money.toFixed(2)}`);
    }
}
christmasTournament([
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
