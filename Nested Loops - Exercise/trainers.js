function trainers (input) {
    let index = 0;

    let n = input[index];
    index++

    let averageGradeAll = 0;
    let presentationCounter = 0;

    let command = input[index];
    index++
    while (command !== "Finish") {
        presentationCounter++
        let presentationName = command;
        let averageGradePresentation = 0;
        for (i = 0; i < n; i++) {
            let grade = Number(input[index]);
            index++
            averageGradePresentation += grade;
        }
        averageGradePresentation = averageGradePresentation / n;
        console.log(`${presentationName} - ${averageGradePresentation.toFixed(2)}.`)
        averageGradeAll += averageGradePresentation
        command = input[index];
        index++
    }
    averageGradeAll = averageGradeAll / presentationCounter
    console.log(`Student's final assessment is ${averageGradeAll.toFixed(2)}.`)
}

trainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])


