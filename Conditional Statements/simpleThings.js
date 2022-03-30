function grade(input) {
    let grade = Number(input[0]);
    if (grade >= 5.50) {
        console.log("Excellent!");
    }
}

function greaterTh(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    if (a > b) {
        console.log(a);
    } else {
        console.log(b);
    }
}

function evenOdd(input) {
    let num1 = Number(input[0]);
    if (num1 % 2 == 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}

function areaFigures(input) {
    let name = input[0];
    let area = 0;
    if(name === "square") {
        let side = Number(input[1]);
        area = side * side
    } else if(name === "rectangle") {
        let sideA = Number(input[1]);
        let sideB = Number(input[2]);
        area = sideA * sideB;
    } else if(name === "circle") {
        let r = Number(input[1]);
        area = Math.PI *(r * r);
    } else if(name === "triangle") {
        let a = Number(input[1]);
        let h = Number(input[2]);
        area = (a * h) / 2 
    }
    console.log(area.toFixed(3));
}

function number100To200(input) {
    let num = Number(input[0]);
    if (num < 100) {
        console.log("Less than 100")
    } else if (num >= 100 && num <= 200) {
        console.log("Between 100 and 200");
    } else {
        console.log("Greater than 200");
    }
    
}

function guessPassword(input) {
    let password = input[0];
    if(password === "s3cr3t!P@ssw0rd") {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
    
}


function kidsShop(input) {
    let excursionPrice = Number(input[0]);
    let puzzlesNumber = Number(input[1]);
    let talkingDollsNumber = Number(input[2]);
    let teddyBearsNumber = Number(input[3]);
    let minniosNumber = Number(input[4]);
    let truckNumber = Number(input[5]);

    let puzzlePrice = 2.60;
    let talkingDollPrice = 3;
    let teddyBearPrice = 4.10;
    let minnionPrice = 8.20;
    let truckPrice = 2;
    

    let amount = puzzlesNumber + talkingDollsNumber + teddyBearsNumber
    + minniosNumber + truckNumber;

    let summ = (puzzlesNumber * puzzlePrice) + (talkingDollsNumber * talkingDollPrice) + (teddyBearsNumber * teddyBearPrice) + 
    (minniosNumber * minnionPrice) + (truckNumber * truckPrice);

    if (amount >= 50) {
        summ = summ - (summ * 0.25);
    } else {
        summ = summ - (summ * 0.10);
    }
   
    
    if (summ >= excursionPrice) {
        console.log(`Yes! ${(summ - excursionPrice).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(excursionPrice - summ).toFixed(2)} lv needed.`);
    }
}
kidsShop(["40.8", "20", "25", "30", "50", "10"]);
kidsShop(["320", "8", "2", "5", "5", "1"])


