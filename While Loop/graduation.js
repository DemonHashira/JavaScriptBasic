function graduation (input) {
    let name = input[0];
    let sumGrades = 0
    let year = 1
    let failCounter = 0;
    let gradesCount = 1;

    while (year <= 12) {
        let calculatedGrades = Number(input[year]);
        year++
        if (calculatedGrades >= 4) {
            gradesCount++
            sumGrades += calculatedGrades
        } else {
            failCounter++
            if (failCounter > 1) {
                console.log(`${name} has been excluded at ${gradesCount} grade`);
                break;
            }
        }
    }
    if (gradesCount >= 12) {
        console.log(`${name} graduated. Average grade: ${(sumGrades / 12).toFixed(2)}`)
    }
}
graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])


