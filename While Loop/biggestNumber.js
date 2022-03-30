function biggestNumber (input) {
    let index = 0;
    let current = input[index];
    let max = Number(current);
    
    while (current !== "Stop") {
        let calculatednum = Number(current);
        if (max < calculatednum) {
            max = calculatednum
        }
        index++
        current = input[index]; 
    }
    console.log(max) 
}
biggestNumber([100,99,80,70,"Stop"])