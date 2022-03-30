function veloCompetition(input) {
    let youngVelopedist = input[0];
    let oldVelopedist = input[1];
    let trase = input[2]

    let priceYoung = 0;
    let priceOld = 0;
    let sum = 0;

    if (trase === "trail") {
        sum = (youngVelopedist * 5.5) + (oldVelopedist * 7)
        sum = sum * 0.95
        console.log(sum.toFixed(2))
    } else if (trase === "cross-country") {
        if (youngVelopedist + oldVelopedist >= 50) {
            priceYoung = 8 * 0.75
            priceOld = 9.50 * 0.75 
            sum = (youngVelopedist * priceYoung) + (oldVelopedist * priceOld);
            sum = sum * 0.95;
            console.log(sum.toFixed(2))
        } else {
            sum = (youngVelopedist * 8) + (oldVelopedist * 9.50);
            sum = sum * 0.95;
            console.log(sum.toFixed(2))
        }
    } else if (trase === "downhill") {
        sum = (youngVelopedist * 12.25) + (oldVelopedist * 13.75);
        sum = sum * 0.95;
        console.log(sum.toFixed(2))
    } else if (trase === "road") {
        sum = (youngVelopedist * 20) + (oldVelopedist * 21.50);
        sum = sum * 0.95;
        console.log(sum.toFixed(2))
    }
}
veloCompetition([30,
25,
"cross-country"])

