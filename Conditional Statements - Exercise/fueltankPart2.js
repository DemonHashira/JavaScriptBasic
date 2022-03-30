function fueltankPart2(input) {
    let typeGorivo = input[0];
    let amountGorivo = input[1];
    let possesionOfCard = input[2];
    let price = 0;
    let discount = 0;

    switch (typeGorivo) {
        case "Gas":
            if (possesionOfCard == "Yes" && amountGorivo > 25) {
                price = amountGorivo * (0.93 - 0.08);
                discount = price * 0.10;
                price = price - discount;
            } else if (possesionOfCard == "Yes" && amountGorivo > 20 && amountGorivo <= 25) {
                price = amountGorivo * (0.93 - 0.08);
                discount = price * 0.08;
                price = price - discount;
            } else if (possesionOfCard == "No" && amountGorivo > 25) {
                price = amountGorivo * 0.93
                discount = price * 0.10;
                price = price - discount;
            } else if (possesionOfCard == "No" && amountGorivo > 20 && amountGorivo <= 25) {
                price = amountGorivo * 0.93;
                discount = price * 0.08;
                price = price - discount;
            }  else if (possesionOfCard == "No" && amountGorivo < 20) {
                price = amountGorivo * 0.93
            } else if (possesionOfCard == "Yes" && amountGorivo < 20) {
                price = amountGorivo * (0.93 - 0.08);
            }
            break;
        case "Gasoline":
            if (possesionOfCard == "Yes" && amountGorivo > 25) {
                price = amountGorivo * (2.22 - 0.18);
                discount = price * 0.10;
                price = price - discount;
            } else if (possesionOfCard == "Yes" && amountGorivo > 20 && amountGorivo <= 25) {
                price = amountGorivo * (2.22 - 0.18);
                discount = price * 0.08;
                price = price - discount;
            } else if (possesionOfCard == "No" && amountGorivo > 25) {
                price = amountGorivo * 2.22
                discount = price * 0.10;
                price = price - discount;
            } else if (possesionOfCard == "No" && amountGorivo > 20 && amountGorivo <= 25) {
                price = amountGorivo * 2.22;
                discount = price * 0.08;
                price = price - discount;
            } else if (possesionOfCard == "No" && amountGorivo < 20) {
                price = amountGorivo * 2.22
            } else if (possesionOfCard == "Yes" && amountGorivo < 20) {
                price = amountGorivo * (2.22 - 0.18);
            }
            break;
        case "Diesel":
            if (possesionOfCard == "Yes" && amountGorivo > 25) {
                price = amountGorivo * (2.33 - 0.12);
                discount = price * 0.10;
                price = price - discount;
            } else if (possesionOfCard == "Yes" && amountGorivo > 20 && amountGorivo <= 25) {
                price = amountGorivo * (2.33 - 0.12);
                discount = price * 0.08;
                price = price - discount;
            } else if (possesionOfCard == "No" && amountGorivo > 25) {
                price = amountGorivo * 2.33
                discount = price * 0.10;
                price = price - discount;
            } else if (possesionOfCard == "No" && amountGorivo > 20 && amountGorivo <= 25) {
                price = amountGorivo * 2.33;
                discount = price * 0.08;
                price = price - discount;
            } else if (possesionOfCard == "No" && amountGorivo < 20) {
                price = amountGorivo * 2.33
            } else if (possesionOfCard == "Yes" && amountGorivo < 20) {
                price = amountGorivo * (2.33 - 0.12);
            }
            break;
    }
    console.log(`${price.toFixed(2)} lv.`)
}
fueltankPart2(["Gas",30,"Yes"]);
fueltankPart2(["Gasoline",25,"No"]);
fueltankPart2(["Diesel",19,"No"]);