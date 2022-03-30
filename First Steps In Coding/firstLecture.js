function hello () {
    console.log("Hello SoftUni")
}

function num1To10 () {
    console.log(1)
    console.log(2)
    console.log(3)
    console.log(4)
    console.log(5)
    console.log(6)
    console.log(7)
    console.log(8)
    console.log(9)
    console.log(10)
}

function squareArea(input) {
    let side = Number(input[0]);
    let area = side * side;
    console.log(area);
}

function fromInchToCm(input) {
    let number = Number(input[0]);
    let inch = number * 2.54;
    console.log(inch);
}


function greeting(input) {
    let name = input[0];
    console.log(`Hello, ${name}!`);
}

function saedinqvane() {
    let firstName = "Viktor";
    let lastName = "Logodajki";
    let age = 17;
    let str = firstName + " " + lastName + " " + age; 
    console.log(str);
}

function saedinqvaneChislo() {
    let first = 5.6;
    let second = 6.4;
    let sum = "The sum is: " + first + second;
    console.log(sum);
}
 
function sabirane() {
    let num = 52133;
    let nim = 43123;
    let sum1 = num + nim;
    console.log(sum1);
}
 
function sabiraneInput(input) {
    let numbv = Number(input[0]);
    let numbvc = Number(input[1]);
    let result = numbv - numbvc; 
    console.log(result);
}

function concatenateData(input) {
    let firstName1 = input[0];
    let lastName1 = input[1];
    let age1 = Number(input[2]);
    let town = input[3];
    console.log(`You are ${firstName1} ${lastName1}, a ${age1}-years old person from ${town}. `);
}

function arhitekt(input) {
    let arhitektName = input[0];
    let broiProekt = Number(input[1]); 
    let vreme = broiProekt * 3; 
   console.log(`The architect ${arhitektName} will need ${vreme} hours to complete ${broiProekt} project/s.`);
}

function zoomagazin(input) {
    let priceFood = 2.50;
    let restFood = 4; 
    let broiDog = Number(input[0]);
    let otherBroiDog = Number(input[1]);
    let finalPriceDog = broiDog * priceFood;
    let finalPriceDog2 = otherBroiDog * restFood;
    console.log(finalPriceDog + finalPriceDog2);
}
function ozelenqvane(input) {
    let kvPrice = 7.61;
    let kvMetriOzeleneni = Number(input[0]);
    let finalPriceHouse = kvMetriOzeleneni * kvPrice;
    let otstupka = finalPriceHouse * 0.18;
    let realFinalPrice = finalPriceHouse - otstupka;
    console.log(`The final price is: ${realFinalPrice} lv.`);
    console.log(`The discount is: ${otstupka} lv.`);
}
ozelenqvane(["550"]); 