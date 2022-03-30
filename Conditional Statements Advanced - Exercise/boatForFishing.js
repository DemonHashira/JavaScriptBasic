function boatForFishing (input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishers = Number(input[2]);
    
    let price = 0;

    switch (season) {
        case "Summer":
            price = 4200;
            if (fishers <= 6) {
                price = price * 0.90;
            } else if (fishers >= 7 && fishers <= 11) {
                price = price * 0.85;
            } else {
                price = price * 0.75
            }
            if (fishers % 2 === 0 ) {
                price = price * 0.95;
            }
            break;
        case "Spring":
            price = 3000;
            if (fishers <= 6) {
                price = price * 0.90;
            } else if (fishers >= 7 && fishers <= 11) {
                price = price * 0.85;
            } else {
                price = price * 0.75
            }
            if (fishers % 2 === 0) {
                price = price * 0.95;
            }
            break;
        case "Autumn":
            price = 4200;
            if (fishers <= 6) {
                price = price * 0.90;
            } else if (fishers >= 7 && fishers <= 11) {
                price = price * 0.85;
            } else {
                price = price * 0.75
            }
            if (fishers % 2 === 0 && season !== "Autumn") {
                price = price * 0.95;
            }
            break;
        case "Winter":
            price = 2600;
            if (fishers <= 6) {
                price = price * 0.90;
            } else if (fishers >= 7 && fishers <= 11) {
                price = price * 0.85;
            } else {
                price = price * 0.75
            }
            if (fishers % 2 === 0) {
                price = price * 0.95;
            }
            break;

    }
    if(budget >= price){
        let diff = budget - price;
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
      }else{
        let diff = Math.abs(budget - price);
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);

    }
}
boatForFishing(["3000",
"Summer",
"11"]);
boatForFishing(["3600",
"Autumn",
"6"]);
boatForFishing(["2000",
"Winter",
"13"]);


