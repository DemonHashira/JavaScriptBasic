function boqdisvane (input) {
    let boxNumber = Number(input[0]);
    let rolkiNumber = Number(input[1]);
    let glovesPrice = Number(input[2]);
    let chetkaPrice = Number(input[3]);

    let paintPrice = boxNumber * 21.50;
    let tapetiPrice = rolkiNumber * 5.20;
    let rakaviciNUmber = Math.ceil(rolkiNumber * 0.35);
    let chetkaNumber = Math.floor(boxNumber * 0.48);

    let rakaviciPrice = rakaviciNUmber * glovesPrice;
    let chetkaFinalPrice = chetkaNumber * chetkaPrice;

    let sumAll = paintPrice + tapetiPrice + rakaviciPrice + chetkaFinalPrice
    let final = sumAll / 15

    console.log(`This delivery will cost ${final.toFixed(2)} lv.`)
}
boqdisvane([1,3,10.9,1])