function calculatorDeposit(input) {
    let depositSum = Number(input[0]);
    let depositTime = Number(input[1]);
    let yearLihvaPercent = Number(input[2]);

    let natrupanaLihva = depositSum * (yearLihvaPercent / 100);
    let lihvaZaMesec = natrupanaLihva / 12;
    let obshtaSuma = depositSum + (depositTime * lihvaZaMesec);
    console.log(obshtaSuma);
}
calculatorDeposit(["200",
"3",
"5.7"])
