function harvest(input) {
    let areaX = Number(input[0]);
    let kgGrapeFor1kMeter = Number(input[1]);
    let letersForSellingZ = Number(input[2]);
    let numberWorkers = Number(input[3]);

    let sumGrape = areaX * kgGrapeFor1kMeter;
    let wine = 0.40 *(sumGrape / 2.5)
    let ostavashto = 0;
    let nedostigashto = 0;
    
    if( wine >= letersForSellingZ) {
        ostavashto = wine - letersForSellingZ
        wineforWorkers = ostavashto / numberWorkers
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        console.log(`${Math.ceil(ostavashto)} liters left -> ${Math.ceil(wineforWorkers)} liters per person.`);
    } else if (wine <= letersForSellingZ) {
        nedostigashto = letersForSellingZ - wine;
        console.log(`It will be a tough winter! More ${Math.floor(nedostigashto)} liters wine needed.`)

    }

}
harvest([650,2,175,3])
harvest([1000,1.5,425,4])