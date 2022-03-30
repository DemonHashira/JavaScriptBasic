function aquarium(input) {
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentage = Number(input[3]);

    let areaAquareium = lenght * width * height;
    let sumLiters = areaAquareium * 0.001;
    let percentage1 = percentage * 0.01;
    let neededLiters = sumLiters * (1-percentage1);
    console.log(neededLiters);
}
aquarium(["85",
"75",
"47",
"17"])
