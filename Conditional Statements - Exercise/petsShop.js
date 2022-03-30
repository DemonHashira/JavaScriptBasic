function pets(input) {
    let daysGone = Number(input[0]);
    let leftFood = Number(input[1]);
    let dogFood = Number(input[2]);
    let catFood = Number(input[3]);
    let turtleFood = Number(input[4]);

    let neededDogFood = daysGone * dogFood;
    let neededCatFood = daysGone * catFood;
    let neededTurtleFood = (daysGone * turtleFood) / 1000
    let sumFood = neededCatFood + neededDogFood + neededTurtleFood;

    if (sumFood <= leftFood) {
        let ostatuk = leftFood - sumFood;
        console.log(`${Math.floor(ostatuk)} kilos of food left.`)
    } else if (sumFood >= leftFood) {
        let nedostatak = sumFood - leftFood;
        console.log(`${Math.ceil(nedostatak)} more kilos of food are needed.`)
    }
}
pets([2,10,1,1,1200]);
pets([5,10,2.1,0.8,321])