function lugage2 (input) {
    let priceLuggage = Number(input[0]);
    let luggageKG = Number(input[1]);
    let daysTravel = Number(input[2]);
    let luggageCount = Number(input[3]);

    let priceToPay = 0; 

    if (luggageKG < 10) {
        priceToPay = priceLuggage * 0.20
    } else if (luggageKG >= 10 && luggageKG <= 20) {
        priceToPay = priceLuggage * 0.50 
    } else {
        priceToPay = priceLuggage
    }

    if (daysTravel > 30) {
        priceToPay = priceToPay + (priceToPay * 0.10);
    } else if (daysTravel < 7) {
        priceToPay = priceToPay + (priceToPay * 0.40)
    } else {
        priceToPay = priceToPay + (priceToPay * 0.15)
    }

    let finalPRice = priceToPay * luggageCount
    console.log(`The total price of bags is: ${finalPRice.toFixed(2)} lv. `)
} 
lugage2(["63.80",
"23",
"3",
"1"])

