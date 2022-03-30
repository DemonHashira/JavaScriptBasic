function calculation(input) {
    let firstGrade = Number(input[0]);
    let secondGrade = Number(input[1]);
    let thirdGrade = Number(input[2]);
    let forthGrade = Number(input[3])

    let result = (firstGrade + secondGrade + thirdGrade + forthGrade) / 4
    console.log(result);
}
calculation([6,3])