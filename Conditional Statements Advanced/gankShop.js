function kvaratala (input) {
    let nameProduct = input[0];
    let city = input[1];
    let amount = Number(input[2]);
    let price = 0;

    if (city == "Sofia") {
        if (nameProduct == "coffee") {
            price = amount * 0.50;
        } else if (nameProduct == "water") {
            price = amount * 0.80;
        } else if (nameProduct == "beer") {
            price = amount * 1.20;
        } else if (nameProduct == "sweets") {
            price = amount * 1.45;
        } else if (nameProduct == "peanuts") {
            price = amount * 1.60
        }
    } else if (city == "Plovdiv") {
        if (nameProduct == "coffee") {
            price = amount * 0.40;
        } else if (nameProduct == "water") {
            price = amount * 0.70;
        } else if (nameProduct == "beer") {
            price = amount * 1.15;
        } else if (nameProduct == "sweets") {
            price = amount * 1.30;
        } else if (nameProduct == "peanuts") {
            price = amount * 1.50
        }
    } else if (city == "Varna") {
        if (nameProduct == "coffee") {
            price = amount * 0.45;
        } else if (nameProduct == "water") {
            price = amount * 0.70;
        } else if (nameProduct == "beer") {
            price = amount * 1.10;
        } else if (nameProduct == "sweets") {
            price = amount * 1.35;
        } else if (nameProduct == "peanuts") {
            price = amount * 1.55
        }
    }  
    console.log(price);
}
kvaratala(["coffee","Varna",2]);
kvaratala(["peanuts","Plovdiv",1]);
kvaratala(["beer","Sofia",6]);