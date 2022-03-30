function traveling (input) {
    let destinationPrice = 0;
    let destinationName = " ";

    for (let index = 0; index < input.length; index++) {
        if (input[index] == "End") {
            break;
        }
        destinationName = input[index];
        index++
        
        destinationPrice = Number(input[index]);
        let totalSavings = 0

        while (totalSavings < destinationPrice) {
            index++
            totalSavings += Number(input[index])
        }
          console.log(`Going to ${destinationName}!`)
    }
}
traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])

