function incomeAgency(input) {
    let nameCompany = input[0];
    let billetsAdultsNumber = input[1];
    let billetsKidsNumber = input[2];
    let billetAdultsNetPrice = input[3];
    let sevingPrice = input[4];

    let netnaKidsBilletPrce = billetAdultsNetPrice - (billetAdultsNetPrice * 0.70);
    let staksaObslijvane = billetAdultsNetPrice + sevingPrice;
    let staksaObslujvaneDEca = netnaKidsBilletPrce + sevingPrice;
    let summALL = (billetsKidsNumber * staksaObslujvaneDEca) + (billetsAdultsNumber * staksaObslijvane);
    let pechalba = summALL * 0.20;
    console.log(`The profit of your agency from ${nameCompany} tickets is ${pechalba.toFixed(2)} lv.`)


}
incomeAgency(["Ryanair",
    60,
    23,
    158.96,
    39.12]
    )