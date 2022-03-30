function salary(input){
    let excursionn = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollCount = Number(input[2]);
    let bearCount = Number(input[3]);
    let minionCount = Number(input[4]);
    let truckCount = Number(input[5]);
 
    let puzzle = 2.6
    let doll = 3
    let bear = 4.1
    let minion = 8.2
    let truck = 2
 
    let discount = 0
    let finalPrice = 0
 
    let ammount = puzzleCount + dollCount + bearCount + minionCount + truckCount;
    let price = (puzzleCount * puzzle) + (dollCount * doll) + (bearCount * bear) + (minionCount * minion) + (truckCount * truck);
 
    if (ammount >= 50){
        discount = price * 0.25;
        finalPrice = price - discount
    }
 
    let rent = price * 0.10
    let profit = price - rent
 
    if (profit > excursionn){
        console.log(`Yes! ${(profit - excursionn).toFixed(2)} lv left.`);
    } 
    else {
        console.log(`Not enough money! ${(excursionn - price).toFixed(2)} lv needed.`);
    }
 
}
salary(["40.8", "20", "25", "30", "50", "10"])