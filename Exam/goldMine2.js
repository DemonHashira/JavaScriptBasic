function goldMine (input) {
    let locationsAmount = Number(input[0]);
    let averageAmount = 0;
    let command2 = 1
    let index2 = 0
        while (command2 <= locationsAmount) {
        index2++
        let expectedAverageAmoount = Number(input[index2]);
        index2++
        let daysWorking = Number(input[index2])
        index2++
        
        index2 = 6
        let sumOfWork = 0;
        let command = 1;
        let index = 3 
        while (command <= daysWorking) {
            sumOfWork += Number(input[index]);
            index++
            command++
        }
        averageAmount = sumOfWork / daysWorking
        if (averageAmount >= expectedAverageAmoount) {
            console.log(`Good job! Average gold per day: ${averageAmount.toFixed(2)}.`)
        } else {
            console.log(`You need ${averageAmount.toFixed(2)} gold.`)
        }
        command2++
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

