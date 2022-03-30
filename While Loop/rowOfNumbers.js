function rowOfNumbers(input) {
    let n = Number(input[0]);
    let result = 1 
    
    while (result <= n) {
        console.log(result);
        result = result * 2 + 1
    }
}
rowOfNumbers([3])