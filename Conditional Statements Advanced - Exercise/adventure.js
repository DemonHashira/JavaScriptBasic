function adventure (input) {
    let budget = Number(input[0]);
    let season = input[1];

    let price = 0;
    let destination;
    let place;

    if (budget <= 100) {
        destination = "Bulgaria";
        if (season == "summer") {
            price = budget * 0.30;
            place = "Camp";
        } else if (season == "winter" ) {
            price = budget * 0.70;
            place = "Hotel";
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        if (season == "summer") {
            price = budget * 0.40;
            place = "Camp";
        } else if (season = "winter") {
            price = budget * 0.80;
            place = "Hotel";
        }
    } else {
        destination = "Europe";
        price = budget * 0.90;
        place = "Hotel"
        
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${price.toFixed(2)}`)
}
adventure(["50", "summer"]);
adventure(["75", "winter"]);
adventure(["312", "summer"]);
adventure(["678.53", "winter"]);
adventure(["1500", "summer"]);