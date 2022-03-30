function presents (input) {
    let index = 0;
    
    let adultsCount = 0;
    let kidsCount = 0;
    let toysCount = 0;
    let sweatersCount = 0;
    let toysPrice = 0;
    let sweatersPrice = 0;

    let command = input[index]

    while (command != "Christmas") {
        let age = Number(command)

        if (age <= 16) {
            kidsCount++
            toysCount++
        } else if (age > 16) {
            adultsCount++
            sweatersCount++
        }
         
        toysPrice = toysCount * 5
        sweatersPrice = sweatersCount * 15

        index++
        command = input[index];
        
    }

    console.log(`Number of adults: ${adultsCount}`);
    console.log(`Number of kids: ${kidsCount}`);
    console.log(`Money for toys: ${toysPrice}`);
    console.log(`Money for sweaters: ${sweatersPrice}`)
}
presents(["18",
"20",
"48",
"45",
"56",
"37",
"12",
"14",
"Christmas"])


