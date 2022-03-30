function EasterLunch (input) {
    let kozunakBroi = input[0];
    let eggs = input[1];
    let kurabii = input[2];

    let kozunakPrice = kozunakBroi * 3.20;
    let eggsPrice = eggs * 4.35;
    let kurabiiPrice = kurabii * 5.40;
    let DyeRridce = eggs * 12 * 0.15;
    let finalResult = kozunakPrice + eggsPrice + kurabiiPrice + DyeRridce;
    console.log(finalResult.toFixed(2));
}
EasterLunch([3,2,3])