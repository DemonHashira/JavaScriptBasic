function otchet (input) {
    let index = 0;

    let expectedSum = Number(input[index]);
    index++

    let priceItems = Number(input[index]);
    

    let cashPayment = 0;
    let cashPaymentCounter = 0;

    let cardPayment = 0;
    let cardPaymentCounter = 0;

    let sumAllPayment = 0
    let cashSum = 0;
    let cardSum = 0;
    let counter = 1;

    while (sumAllPayment <= expectedSum) {
        if (priceItems === "End") {
                break;
            } 
        
        cashPayment = Number(input[index]);
        index++

        cardPayment = Number(input[index]);
        index++
        if (counter % 2 != 0 ) {
            if (cashPayment >= 100) {
                console.log(`Error in transaction!`);
                counter++
            } else {
                console.log(`Product sold!`);
                sumAllPayment += Number(cashPayment);
                cashPaymentCounter++
                cashSum += Number(cashPayment)
                counter++ 
            }
        }
        if (counter % 2 == 0) {
            if (cardPayment <= 10) {
                console.log(`Error in transaction!`);
                counter++
            } else {
                console.log(`Product sold!`);
                sumAllPayment += Number(cardPayment);
                cardPaymentCounter++
                cardSum += Number(cardPayment);
                counter++
            }
        }
        priceItems = input[index];

    }
    if (sumAllPayment >= expectedSum) {
    let averageCash = cashSum / cashPaymentCounter
    let averageCard = cardSum / cardPaymentCounter
    console.log(`Average CS: ${averageCash.toFixed(2)}`);
    console.log(`Average CC: ${averageCard.toFixed(2)}`);
    } else {
        console.log(`Failed to collect required money for charity.`);
    }
}
otchet([500,120,"End"]);




