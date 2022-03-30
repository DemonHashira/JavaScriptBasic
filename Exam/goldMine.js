function goldMine (input) {
    let amountLocations = Number(input[0]);
    let averageDobiv = 0
    let dobiv = 0;
    let realDobiv = 0;
    let requiredAverageDobiv = 0;

    
    for (let i = 1; i <= amountLocations; i++) {
        requiredAverageDobiv = Number(input[i]);
        i++
        let daysCopaene = Number(input[i])

        for (let j = 0; j <= daysCopaene; j++) {
            dobiv = Number(input[j]);
            realDobiv = realDobiv + dobiv 
            averageDobiv = realDobiv / 3 
        }
    }
    if (averageDobiv >= requiredAverageDobiv) {
        console.log(`Good job! Average gold per day: ${averageDobiv.toFixed(2)}.`)
    } else {
        console.log(`You need ${averageDobiv.toFixed(2)} gold.`)
    }
}
goldMine(["2",
"10",
"3",
"10",
"10",
"11",
"20",
"2",
"20",
"10"])
