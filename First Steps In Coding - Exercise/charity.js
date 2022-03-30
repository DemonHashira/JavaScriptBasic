function charityCampaing(input) {
    let daysNumber = Number(input[0]);
    let confectioner = Number(input[1]);
    let cakes = Number(input[2]);
    let waffles = Number(input[3]);
    let pancakes = Number(input[4]);

    let cakesPrice = cakes * 45;
    let wafflesPrice = waffles * 5.80;
    let pancakesPrice = pancakes * 3.20;
    let sumOfOneDay = (cakesPrice + wafflesPrice + pancakesPrice) * confectioner;
    let finalSum = sumOfOneDay * daysNumber;
    finalSum = finalSum - (finalSum / 8);
    console.log(finalSum);
    
}
charityCampaing(["23",
"8",
"14",
"30",
"16"])

