function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let amount = input[2];
    let price = 0;
    let isValid = "banana" || "apple" || "orange" || "grapefruit" || "kiwi" || "pineapple" || "grapes" && day == "Monday" || "Tuesday" || "Wednesday" || "Thursday" || "Friday" || "Saturday" || "Sunday"

    if ((fruit === "banana") && (day !== "Saturday" || "Sunday")) {
        price = amount * 2.50;
    } else if ((fruit === "banana") && (day === "Saturday" || "Sunday")) {
        price = amount * 2.70;
    } else if ((fruit === "apple") && (day !== "Saturday" || "Sunday")) {
        price = amount * 1.20;
    } else if ((fruit === "apple") && (day === "Saturday" || "Sunday")) {
        price = amount * 1.25;
    } else if ((fruit === "orange") && day !== "Saturday" || day != "Sunday") {
        price = amount * 0.85;
    } else if ((fruit === "orange") && day == "Saturday" || day == "Sunday") {
        price = amount * 0.90;
    } else if ((fruit === "grapefruit") && (day !== "Saturday" || "Sunday")) {
        price = amount * 1.45;
    } else if ((fruit === "grapefruit") && (day === "Saturday" || "Sunday")) {
        price = amount * 1.60;
    } else if ((fruit === "kiwi") && (day !== "Saturday" || "Sunday")) {
        price = amount * 2.70;
    } else if ((fruit === "kiwi") && (day === "Saturday" || "Sunday")) {
        price = amount * 3.00;
    } else if ((fruit === "pineapple") && (day !== "Saturday" || "Sunday")) {
        price = amount * 5.50;
    } else if ((fruit === "pineapple") && (day === "Saturday" || "Sunday")) {
        price = amount * 5.60;
    } else if ((fruit === "grapes") && (day !== "Saturday" || "Sunday")) {
        price = amount * 3.85;
    } else if ((fruit === "grapes") && (day === "Saturday" || "Sunday")) {
        price = amount * 4.20;
    }
    if (!isValid) {
        console.log("error");
    }
    console.log((price).toFixed(2));
}
fruitShop(["apple",
"Tuesday",
"2"]);
fruitShop(["orange",
"Sunday",
"3"]);
fruitShop(["kiwi",
"Monday",
"2.5"]);
fruitShop(["grapes",
"Saturday",
"0.5"]);
fruitShop(["tomato",
"Monday",
"0.5"]);



