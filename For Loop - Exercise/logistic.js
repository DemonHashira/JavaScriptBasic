function logistic(input) {
    let amountTovar = Number(input[0]);

    let sumTovari = 0;
    let averagePriceTon = 0;
    let microbus = 0;
    let truck = 0;
    let train = 0;

    for (let i = 1; i <= amountTovar; i++) {
        let tonajTovar = Number(input[i])
        if (tonajTovar <= 3 ) {
            microbus += tonajTovar
        } else if (tonajTovar >= 4 && tonajTovar <= 11) {
            truck += tonajTovar
        } else if (tonajTovar >= 12) {
            train += tonajTovar;
        }
        sumTovari += tonajTovar
    }
    let microbusPRice = microbus * 200;
    let truckPrice = truck * 175;
    let trainPRice = train * 120;

    let totalPRice = microbusPRice + truckPrice + trainPRice;

    console.log((totalPRice / sumTovari).toFixed(2));
    console.log((microbus / sumTovari * 100).toFixed(2) + "%");
    console.log((truck / sumTovari * 100).toFixed(2) + "%");
    console.log((train / sumTovari * 100).toFixed(2) + "%");
}
logistic([5,2,10,20,1,7])