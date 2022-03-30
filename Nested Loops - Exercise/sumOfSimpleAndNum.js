function simpleNum (input) {
    let sumPrime = 0;
    let sumNonPrime = 0;
    let index = 0;
    let isPrime = true;
    let command = input[index]
    index++

    while (command != "stop") {
        let numbers = Number(command);
        if (numbers < 0) {
            console.log(`Number is negative.`);
            command = input[index];
            index++
            continue;
        }

        if (numbers === 1) {
            sumPrime += numbers;
            command = input[index]
            index++
            continue;
        }
        isPrime = true
        for (let i = 2; i <= Math.sqrt(numbers); i++) {
            if (numbers % i == 0 ) {
                isPrime = false
                break;
            } 
        }
        if (isPrime) {
            sumPrime += numbers
        } else {
            sumNonPrime += numbers
        }  
        command = input[index];
        index++
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`)
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`)
}
simpleNum(["3",
"9",
"0",
"7",
"19",
"4",
"stop"])
