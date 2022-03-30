function hotelRoom (input) {
    let month = input[0];
    let nights = Number(input[1]);
    
    let priceApratment = 0;
    let priceStudio = 0;
    let discountStudio = 0 
    let discountApart = 0;


    if (month == "May" || month == "October") {
        priceApratment = 65 * nights;
        priceStudio = 50 * nights;
        if (nights > 7 && nights < 14) {
            discountStudio = priceStudio * 0.05;
            priceStudio = priceStudio - discountStudio
        } else if (nights > 14) {
            discountStudio = priceStudio * 0.30
            discountApart = priceApratment * 0.10
            priceStudio = priceStudio - discountStudio
            priceApratment = priceApratment - discountApart;
        } 
    } else if (month == "June" || month ==  "September") {
        priceApratment = 68.70 * nights;
        priceStudio = 75.20 * nights;
        if (nights > 14) {
            discountStudio = priceStudio * 0.20
            discountApart = priceApratment * 0.10
            priceStudio = priceStudio - discountStudio
            priceApratment = priceApratment - discountApart;
        } 
    } else if (month == "July" || month == "August") {
        priceApratment = 77 * nights;
        priceStudio = 76 * nights;
        if (nights > 14) {
            discountApart = priceApratment * 0.10;
            priceApratment = priceApratment - discountApart;   
        }
    }
    console.log(`Apartment: ${priceApratment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`)
}

hotelRoom(["August",
"20"]);





