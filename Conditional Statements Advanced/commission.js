function commissione(input) {
    let city = input[0];
    let sells = Number(input[1]);
    let commision = 0;
    isError = false

    if (sells <= 0) {
        console.log("error");
    } else {
        switch (city) {
            case "Sofia":
                if(sells <= 500) {
                    commision = sells * 0.05;
                } else if (sells <= 1000) {
                    commision = sells * 0.07;
                } else if (sells <= 10000) {
                    commision = sells * 0.08;
                }else {
                    commision = sells * 0.12;
                }
                break;
            case "Varna":
                if(sells <= 500) {
                    commision = sells * 0.045;
                } else if (sells <= 1000) {
                    commision = sells * 0.075;
                } else if (sells <= 10000) {
                    commision = sells * 0.10;
                }else {
                    commision = sells * 0.13;
                }
                break;
            case "Plovdiv":
                if(sells <= 500) {
                    commision = sells * 0.055;
                } else if (sells <= 1000) {
                    commision = sells * 0.08;
                } else if (sells <= 10000) {
                    commision = sells * 0.12;
                }else {
                    commision = sells * 0.145;
                }
                break; 
                default:
                    isError = true
                    break;   
        }
        if (isError) {
            console.log("error");
        } else {
            console.log(commision.toFixed(2));
        }
    }
}
commissione(["Sofia",
"1500"]);
commissione(["Plovdiv",
"499.99"]);
commissione(["Varna",
"3874.50"]);
commissione(["Kaspichan",
"-50"]);


