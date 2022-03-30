function grandaStavri(input) {
    let days = Number(input[0]);
    let index = 1
    let sumAll = 0
    let averageGradus = 0;
    let sumLitters = 0
    for (let i = 1; i <= days; i++) {
        let rakiaAmount = Number(input[index]);
        index++
        let rakiaGradus = Number(input[index])
        index++

        sumLitters += rakiaAmount
        sumAll += rakiaAmount * rakiaGradus

        averageGradus = sumAll /  sumLitters
    }
    console.log(`Liter: ${sumLitters.toFixed(2)}`);
    console.log(`Degrees: ${averageGradus.toFixed(2)}`);
    if (averageGradus < 38) {
        console.log(`Not good, you should baking!`);
    } else if (averageGradus >= 38 && averageGradus <= 42) {
        console.log(`Super!`)
    } else {
        console.log(`Dilution with distilled water!`)
    }
}
grandaStavri([2,200,43,200,40])