
function examPrep (input) {
    let index = 0;
    let unpleasantGradeLimit = Number(input[index]);
    index++
    let sumGrades = 0;
    let badGrades = 0;
    let goodGrades = 0;
    let finalTask = " ";
    let aveareScore = 0;

    while (badGrades < unpleasantGradeLimit) {
        let taskName = input[index];
        index++
        let taskGrade = Number(input[index]);
        index++
        
        if (taskName === "Enough") {
            aveareScore = sumGrades / goodGrades
            console.log(`Average score: ${(aveareScore).toFixed(2)}`)
            console.log(`Number of problems: ${goodGrades}`)
            console.log(`Last problem: ${finalTask}`)
            break;
        }

        if (taskGrade <= 4) {
             badGrades++
        }
        sumGrades += taskGrade
        goodGrades++
        finalTask = taskName
    }
        if (badGrades === unpleasantGradeLimit ) {
            console.log(`You need a break, ${badGrades} poor grades.`)
    }
}
examPrep(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"]);
