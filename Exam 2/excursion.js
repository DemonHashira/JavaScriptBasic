function excursion(input) {
    let people = Number(input[0]);
    let nights = Number(input[1]);
    let mapsTransport = Number(input[2]);
    let ticketsMuseum = Number(input[3]);

    let nightsPrice = nights * 20;
    let mapsPrice = mapsTransport * 1.60;
    let ticketsPrice = ticketsMuseum * 6;

    let onePersonPrice = nightsPrice + mapsPrice + ticketsPrice;
    let sumAllPeople = onePersonPrice * people;

    let finalSum = sumAllPeople + (sumAllPeople * 0.25);
    console.log(`${finalSum.toFixed(2)}`)
}
excursion([131,9,33,46])