function flowerMagazine(input) {
    let magnolsNumber = Number(input[0]);
    let zioumbuiliNumber = Number(input[1]);
    let roseNumber = Number(input[2]);
    let cactusNumber = Number(input[3]);
    let presentPrice = Number(input[4]);

    let maglolsPrice = magnolsNumber * 3.25;
    let zioumbuiliPrice = zioumbuiliNumber * 4;
    let rosePrice = roseNumber * 3.50;
    let cactusPRice = cactusNumber * 8;
    
    let sum = maglolsPrice + zioumbuiliPrice + rosePrice + cactusPRice
    let danak = sum * 0.05;
    let pechalba = sum - danak;

    if (pechalba >= presentPrice) {
        let ostavashti = pechalba - presentPrice;
        console.log(`She is left with ${Math.floor(ostavashti)} leva.`)

    } else if (pechalba <= presentPrice) {
        let nedostigashti = presentPrice - pechalba;
        console.log(`She will have to borrow ${Math.ceil(nedostigashti)} leva.`)
    }
}
flowerMagazine([2,3,5,1,50])
flowerMagazine([15,7,5,10,100])
