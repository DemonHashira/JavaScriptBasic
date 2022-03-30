function changeBuro(input) {
    let bitcoin = input[0];
    let chinese = input[1];
    let commision = input[2];

    let bitcoinPriceLeva = bitcoin * 1168
    let chinesePriceLeva = chinese * 0.15
    let ChineseLEvareal = chinesePriceLeva * 1.76
    let euro = bitcoinPriceLeva + ChineseLEvareal;
    let euroReal = euro / 1.95;
    let commisione = euroReal * (commision * 0.01);
    let result = euroReal - commisione;
    console.log(result.toFixed(2));
}
changeBuro([1,5,5])