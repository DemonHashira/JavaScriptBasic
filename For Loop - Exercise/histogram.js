function histogram (input) {
    let num = Number(input[0]);
    
    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;
    let p4Counter = 0;
    let p5Counter = 0;

    for (let i = 1; i <= num; i++) {
        let n = Number(input[i])
        if (n < 200) {
            p1Counter++
        } else if (n >= 200 && n <= 399) {
            p2Counter++
        } else if (n >= 400 && n <= 599) {
            p3Counter++
        } else if (n >= 600 && n <= 799) {
            p4Counter++
        } else {
            p5Counter++
        }
    }
    let p1Percent = p1Counter / num * 100 
    let p2Percent = p2Counter / num * 100 
    let p3Percent = p3Counter / num * 100 
    let p4Percent = p4Counter / num * 100 
    let p5Percent = p5Counter / num * 100 

    console.log(p1Percent.toFixed(2) + "%");
    console.log(p2Percent.toFixed(2) + "%");
    console.log(p3Percent.toFixed(2) + "%");
    console.log(p4Percent.toFixed(2) + "%");
    console.log(p5Percent.toFixed(2) + "%");
}
histogram(["7",
"800",
"801",
"250",
"199",
"399",
"599",
"799"])
