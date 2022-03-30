function solve(input) {
        let num1 = Number(input[0])
        let num2 = Number(input[1])
        let result = 0;

        if ((num1 >= 1 && num1 <= 9) && (num2 >= 1 && num2 <= 9)) {
            let maxResult = num1 * num2;
            for (let i = 1; i <= num1; i++) {
                for (let j = 1; j <= num2; j++) {
                    result = i * j;
                    console.log(i + "*" + j + "=" + " " + result + ";"); 
                }
            }
        }
}
solve([2,2]);