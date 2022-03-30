function schoolMaterials (input) {
    let pencils = input[0];
    let markers = input[1];
    let preparat = input[2];
    let percentDiscount = input[3];

    let pricePencil = pencils * 5.80;
    let priceMarkers = markers * 7.20;
    let pricePreparat = preparat * 1.20;
    let priceALL = pricePencil + priceMarkers + pricePreparat;
    let priceDiscount = priceALL - ((priceALL * percentDiscount) / 100 );
     console.log(priceDiscount.toFixed(3));
}
schoolMaterials([2,3,2.5,25])