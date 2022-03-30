function highYEars(input) {
    let startYear = Number(input[0]);
    let finalYear = Number(input[1]);

    for (let i = startYear; i <= finalYear; i+=4) {
        console.log(i)
    }
}
highYEars(["2020",
"2032"])
