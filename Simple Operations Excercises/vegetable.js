function vegetableMarket(input) {
    let firstRowPrice = input[0];
    let secondRowPrice = input[1];
    let thirdRowSum = input[2];
    let forthRowSum = input[3];

    let vegetablesPRice = firstRowPrice * thirdRowSum;
    let fruitPrice = secondRowPrice * forthRowSum;
    let finalPrice = (fruitPrice + vegetablesPRice) / 1.94;
    console.log(finalPrice.toFixed(2));
}
vegetableMarket([0.194,19.4,10,10])