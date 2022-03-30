function sredenUspeh(input) {
    let bg = Number(input[0]);
    let angl = Number(input[1]);
    let ispanski = Number(input[2]);
    let mat = Number(input[3]);
    let fizicheso = Number(input[4]);
    let grajdansko = Number(input[5]);
    let bgModul = Number(input[6]);
    let anglModul = Number(input[7]);
    let istoriqModul = Number(input[8]);
    let infmodul = Number(input[9]);

    let result = (bg + angl + ispanski + mat + fizicheso + grajdansko + bgModul + anglModul + istoriqModul + infmodul) / 10;
    console.log(result.toFixed(2))
}
sredenUspeh([6,6,6,6,6,6,5.80,6,6,6])