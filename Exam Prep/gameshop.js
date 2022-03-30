function gameShop (input) {
    let n = Number(input[0])

    let heartstoneCounter = 0;
    let fortniteCounter = 0;
    let overwatchCounter = 0;
    let othersCounter = 0;

    for (let i = 1; i <= n; i++) {
        let gameName = input[i]

        if (gameName == "Hearthstone") {
            heartstoneCounter++
        } else if (gameName == "Fornite") {
            fortniteCounter++
        } else if (gameName == "Overwatch") {
            overwatchCounter++
        } else {
            othersCounter++
        }
    }
    console.log(`Hearthstone - ${(heartstoneCounter * 1 / n * 100).toFixed(2)}%`);
    console.log(`Fornite - ${(fortniteCounter * 1 / n * 100).toFixed(2)}%`);
    console.log(`Overwatch - ${(overwatchCounter * 1 / n * 100).toFixed(2)}%`);
    console.log(`Others - ${(othersCounter * 1 / n * 100).toFixed(2)}%`);
} 
gameShop(["3",
"Hearthstone",
"Diablo 2",
"Star Craft 2"])
