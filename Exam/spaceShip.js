function spaceShip (input) {
    let widthShip = Number(input[0]);
    let lengthShip = Number(input[1]);
    let hightShip = Number(input[2]);
    let averageHeightAsto = Number(input[3]);

    let areaRocket = widthShip * lengthShip * hightShip;
    let areaRoom = (averageHeightAsto + 0.40) * 2 * 2;

    let astrounauts = Math.floor(areaRocket / areaRoom)
    
    if (astrounauts >= 3 && astrounauts <= 10) {
        console.log(`The spacecraft holds ${astrounauts} astronauts.`)
    } else if (astrounauts < 3) {
        console.log(`The spacecraft is too small.`)
    } else {
        console.log(`The spacecraft is too big.`)
    }
}


function string2() {
    let a = "7"
    let b = "7"
    console.log(a * b)
}
string2