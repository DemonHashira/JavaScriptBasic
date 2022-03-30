function metricConverter(input) {
    let num = Number(input[0]);
    let vhodna = String(input[1]);
    let izhodna = String(input[2]);
    let izhod = 0;

    if (vhodna == "mm" && izhodna == "m") {
        izhod = num / 1000
    } else if (vhodna == "mm" && izhodna == "cm") {
        izhod = num / 10;
    } else if (vhodna == "cm" && izhodna == "mm") {
        izhod = num * 10
    } else if (vhodna == "cm" && izhodna == "m") {
        izhod = num / 100
    } else if (vhodna == "m" && izhodna == "cm") {
        izhod = num * 100
    } else if (vhodna == "m" && izhodna == "mm") {
        izhod = num * 1000
    }
    console.log(izhod.toFixed(3));
}
metricConverter(["12", "mm", "m"])
