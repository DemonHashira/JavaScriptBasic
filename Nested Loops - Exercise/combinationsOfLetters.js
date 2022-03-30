function combination (input) {
    let firstLetter = input[0].charCodeAt();
    let secondLetter = input[1].charCodeAt();
    let thirdLetter = input[2]
    
    let combinationCounter = 0;
    let array = []
    let g = "";
    for (let i = firstLetter; i <= secondLetter; i++) {
        for (let j = firstLetter; j <= secondLetter; j++) {
            for (let k = firstLetter; k <= secondLetter; k++) {
                let first = String.fromCharCode(i);
                let second = String.fromCharCode(j);
                let third = String.fromCharCode(k)
                if (first != thirdLetter && second != thirdLetter && third != thirdLetter) {
                    combinationCounter++
                    g += (first + second + third) + " ";
                    array.push(first + second + third);
                } 
            }
        }
    }
    array.push(combinationCounter);
    console.log(array.join(' '));
}
combination(["a", "c", "b"]);