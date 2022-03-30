function coventor(input) {
    let radians = Number(input[0]);
    let gradus = radians * 180 / Math.PI;
    console.log(gradus.toFixed(0));
}
coventor(["3.1416"])