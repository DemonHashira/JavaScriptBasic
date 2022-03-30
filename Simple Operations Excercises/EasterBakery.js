function easterBakery (input) { 
    let brashnoPrice = input[0];
    let kgBrashno = input[1];
    let kgZahar = input[2];
    let broiQica = input[3];
    let paketMaq = input[4];


    let ZaharPRice = brashnoPrice * 0.75;
    let egssPrice = brashnoPrice * 1.1;
    let maqPrice = ZaharPRice * 0.2;
    let brashnoFInal = brashnoPrice * kgBrashno;
    let zaharFinal = ZaharPRice * kgZahar;
    let eggsFinal = broiQica * egssPrice;
    let maqFinal = paketMaq * maqPrice;
    let sum = brashnoFInal + zaharFinal + eggsFinal + maqFinal;
    console.log(sum.toFixed(2));

}
easterBakery([50,10,3.5,6,1])