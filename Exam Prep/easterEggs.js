function easterEggs (input) {
    let eggs = Number(input[0]);

    let redCounter = 0;
    let orangeCounter = 0;
    let blueCounter = 0;
    let greemCounter = 0;

    for (let i = 1; i <= eggs; i++) {
        let colurEgg = input[i];

        if (colurEgg == "red") {
            redCounter++
        } else if (colurEgg == "orange") {
            orangeCounter++
        } else if (colurEgg == "blue") {
            blueCounter++
        } else {
            greemCounter++
        }
    }
    
    let maxCount = redCounter
    let maxColour = "red";

    if (orangeCounter > maxCount) {
        maxCount = orangeCounter;
        maxColour = "orange"

    } if (blueCounter > maxCount) {
        maxCount = blueCounter;
        maxColour = "blue"
        
    }  if (greemCounter > maxCount) {
        maxCount = greemCounter;
        maxColour = "green"
    }

    console.log(`Red eggs: ${redCounter}`);
    console.log(`Orange eggs: ${orangeCounter}`);
    console.log(`Blue eggs: ${blueCounter}`);
    console.log(`Green eggs: ${greemCounter}`);
    console.log(`Max eggs: ${maxCount} -> ${maxColour}`)
}


function num() {
    let num = 123456
    let lastDigit = num % 10
    console.log(lastDigit)
}
num()