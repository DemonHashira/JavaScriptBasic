function numbersDown() {
    for (let i = 1; i <= 100; i++) {
        console.log(i)
    }
}



function numbers1toNFrom3(input) {
    let num = Number(input[0]);
    for (let i = 1; i <= num; i+=3) {
        console.log(i);
    }
}

function numsForm100to1(input) {
    let n = Number(input[0]);
    for (let i = n; i >= 1; i--) {
        console.log(i)
    }
}

function nums2stpen(input) {
    let n = Number(input[0]);
    for (let i = 0; i <= n; i+=2) {
        console.log(Math.pow(2,i))
    }
}

function readText(input) {
    let text = input[0];
    for (i = 0; i < text.length; i++){
        console.log(text[i])
    }
}

function sumLetters(input) {
    let text = String(input[0]);
    let result = 0
    for (i = 0; i < text.length; i++) {
        switch (text[i]) {
            case "a":
                result+=1;
                break;
            case "e":
                result+=2
                break;
            case "i":
                result+=3
                break;
            case "o":
                result+=4
                break;
            case "u":
                result+=5
                break;
        }
    }
    console.log(result)
}

function sumNumbers(input) {
    let n = String(input[0]);
    let sum = 0
    for (i = 0; i < n.length; i++) {
        sum += Number(n[i])
    }
    console.log(`The sum of the digits is:${sum}`)
}

function numDel9(input) {
    let n = Number(input[0]);
    let m = Number(input[1]);
    let stringResult = "";
    let result = 0;
    for (let i = n; i <= m; i++) {
        if (i % 9 == 0 ) {
            result+=i;
            stringResult+= i + "\n";
        }
    }
    console.log(`The sum: ${result}`);
    console.log(stringResult);
}


function cleverLily (input) {
    let age = Number(input[0]);
    let washerPrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let savedMoney = 0;
    let toyCount = 0;
    let totalMoney = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 == 0) {
            savedMoney += 10;
            totalMoney += savedMoney;
            totalMoney--;
        } else {
            toyCount++
        }

    }
    totalMoney += toyCount * toyPrice;

    if (totalMoney >= washerPrice) {
        let left = totalMoney - washerPrice;
        console.log(`Yes! ${left.toFixed(2)}`)
    } else {
        let needed = washerPrice - totalMoney;
        console.log(`No! ${needed.toFixed(2)}`)
    }
}
cleverLily([10,170,6]);
