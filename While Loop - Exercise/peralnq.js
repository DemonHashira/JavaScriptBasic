function goshoPeralnq (input) {
    let index = 0;

    let detergentInput = Number(input[index]);
    index++

    let tendjera = 0;
    let ciniq = 0;
    let loadingCounter = 0;
    let tendjeraCounter = 0;
    let ciniqCounter = 0; 

    let leftDegertantInput = detergentInput * 750;
    let disheshNeededClean = Number(input[index]);
    index++

    while (disheshNeededClean !== "End") {
        loadingCounter++
        tendjera = Number(disheshNeededClean)
        ciniq = Number(disheshNeededClean)

        if (loadingCounter % 3 == 0) {
            tendjera *=  15;
            leftDegertantInput -=  tendjera
            tendjeraCounter += Number(disheshNeededClean)
           
            if (leftDegertantInput < 0) {
                break;
            }

        } else {
            ciniq *=  5
            leftDegertantInput -=  ciniq
            ciniqCounter += Number(disheshNeededClean)
            
            if (leftDegertantInput < 0) {
                break;
            }
        }
        disheshNeededClean = input[index];
        index++
    }
    if (leftDegertantInput >= 0 ) {
        console.log(`Detergent was enough!`);
        console.log(`${Number(ciniqCounter)} dishes and ${Number(tendjeraCounter)} pots were washed.`);
        console.log(`Leftover detergent ${leftDegertantInput} ml.`)
    } else {
        console.log(`Not enough detergent, ${Math.abs(leftDegertantInput)} ml. more necessary!`);
    }
}
goshoPeralnq([2,53,65,55,"End"]);