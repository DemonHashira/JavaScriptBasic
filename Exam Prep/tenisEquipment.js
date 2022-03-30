function equipments (input) {
    let racketPrice = Number(input[0]);
    let racketCount = Number(input[1]);
    let snookersCount = Number(input[2]);

    let finalRacketPrice = racketPrice * racketCount;
    let snookersPRice = racketPrice / 6;
    let finlSnookerPrice = snookersPRice * snookersCount;
    let leftEquipment = 0.2 * (finalRacketPrice + finlSnookerPrice);

    let sumAll = finalRacketPrice + finlSnookerPrice + leftEquipment;

    let priceJ = sumAll / 8;
    let priceS = sumAll * 7 / 8;

    console.log(`Price to be paid by Djokovic ${Math.floor(priceJ)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(priceS)}`)
}
equipments([850,4,2])