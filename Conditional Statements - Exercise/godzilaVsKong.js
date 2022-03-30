function godzilaVsKong(input) {
    let budget = Number(input[0]);
    let staff = Number(input[1]);
    let clothingPrice = Number(input[2]);

    
    if (staff > 150) {
        clothingPrice = clothingPrice * 0.90;
    }
    let decorPrice = budget * 0.10; 
    let oblekloPrice = staff * clothingPrice;
    let ObshtaSuma = decorPrice + oblekloPrice;
    let ostavashti = budget - ObshtaSuma;
    if (ObshtaSuma > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(ObshtaSuma-budget).toFixed(2)} leva more.`)
    } else if (ObshtaSuma <= budget) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget-ObshtaSuma).toFixed(2)} leva left.`)
    }
}
godzilaVsKong(["9587.88",
"222",
"55.68"])





