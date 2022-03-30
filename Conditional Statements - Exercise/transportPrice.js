function transportPrice(input) {
    let numberkmN = Number(input[0]);
    let dayOrNight = input[1];
    let price = 0;

    if (numberkmN <= 19 && dayOrNight === "day") {
        price = 0.70 + numberkmN  * 0.79;
    } else if (numberkmN <= 19 && dayOrNight === "night") {
        price = 0.70 + numberkmN  * 0.90;
    } else if (numberkmN >= 100) {
        price = numberkmN * 0.06;
    } else {
        price = numberkmN * 0.09;
    }      
    console.log((price).toFixed(2));
}
transportPrice([5,"day"]);
transportPrice([7,"night"]);
transportPrice([25,"day"]);
transportPrice([180,"night"])