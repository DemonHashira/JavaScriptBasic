function pipesInPool(input) {
    let volumeV = Number(input[0]);
    let pipeP1 = Number(input[1]);
    let pipeP2 = Number(input[2]);
    let hoursLeftH = Number(input[3]);
    
    let pipeP1Fill = pipeP1 * hoursLeftH;
    let pipeP2Fill = pipeP2 * hoursLeftH;
    let sumFill = pipeP1Fill + pipeP2Fill;
    let percentageFilledPool = sumFill / volumeV * 100;
    let pipeP1Contribution = pipeP1Fill / sumFill * 100;
    let pipeP2Contribution = pipeP2Fill / sumFill * 100;
    

    if(sumFill <= volumeV) {
        console.log(`The pool is ${(percentageFilledPool).toFixed(2)}% full. Pipe 1: ${(pipeP1Contribution).toFixed(2)}%. Pipe 2: ${(pipeP2Contribution).toFixed(2)}%.`);
    } else if (sumFill >= volumeV) {
        let razlka = sumFill - volumeV
        console.log(`For ${hoursLeftH} hours the pool overflows with ${(razlka).toFixed(2)} liters.`);
    }
}
pipesInPool([1000,100,120,3])
pipesInPool([100,100,100,2.5])