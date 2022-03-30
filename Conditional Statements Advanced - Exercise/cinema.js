function cinema (input) {
    let typeProjection = input[0];
    let rows = Number(input[1]);
    let colums = Number(input[2]);

    let income = 0

    if (typeProjection == "Premiere") {
        income = rows * colums * 12.00;
    } else if (typeProjection == "Normal") {
        income = rows * colums * 7.50;
    } else if (typeProjection == "Discount") {
        income = rows * colums * 5.00
    }
    console.log(income.toFixed(2))
}
cinema(["Premiere",
"10",
"12"])
