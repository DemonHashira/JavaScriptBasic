function fueltank(input) {
    let gorivo = input[0];
    let litersGorivo = input[1];

    switch (gorivo) {
        case "Diesel":
            if (litersGorivo >= 25) {
                console.log("You have enough diesel.");
            } else if (litersGorivo < 25) {
                console.log("Fill your tank with diesel!")
            }
            break;
        case "Gasoline":
            if (litersGorivo >= 25) {
                console.log("You have enough gasoline.");
            } else if (litersGorivo < 25) {
                console.log("Fill your tank with gasoline!")
            }
            break; 
        case "Gas":
            if (litersGorivo >= 25) {
                console.log("You have enough gas.");
            } else if (litersGorivo < 25) {
                console.log("Fill your tank with gas!")
            }
            break;     
            default:
                console.log("Invalid fuel!")   
    }
}
fueltank(["Diesel",10]);
fueltank(["Gasoline",40]);
fueltank(["Gas",25]);
fueltank(["Kerosene",200]);