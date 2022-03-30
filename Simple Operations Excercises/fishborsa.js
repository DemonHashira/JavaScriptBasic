function ribnaBorsa(input) {
    let skumriqKgPrice = (input[0]);
    let cacaKgPrice = Number(input[1]);
    let palamudKg = Number(input[2]);
    let safridKg = Number(input[3]);
    let midiKg = Number(input[4]);

    let palamudPrice = skumriqKgPrice + (skumriqKgPrice * 0.60);
    let sumPalamud = palamudKg * palamudPrice;
    let safridPrice = cacaKgPrice + (cacaKgPrice * 0.80);
    let sumSafrid = safridKg * safridPrice;
    let sumMida = midiKg * 7.50;
    let finalSum = sumPalamud + sumSafrid + sumMida;
    finalSum = String(finalSum);
    let result = parseFloat(finalSum)
    console.log(result.toFixed(2));
}
ribnaBorsa([5.55,3.57,4.3,3.6,7]);