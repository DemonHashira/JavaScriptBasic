function stipendii(input) {
    let dohod = Number(input[0]);
    let averageGrade = Number(input[1]);
    let minWorkingSalary = Number(input[2]);


    let isSocialScolarship = false;
    let isScolarship = false;
    let socialScholarshipMoney = 0;
    let excellentGradeScholarshipMoney = 0;

    if (dohod < minWorkingSalary) {
        isSocialScolarship = true
    }

    if (averageGrade < 4.5) {
        isSocialScolarship = false 
    }

    if (isSocialScolarship) {
        isScolarship = true;
        socialScholarshipMoney = minWorkingSalary * 0.35;
    }
    if (averageGrade >= 5.50) {
        isScolarship = true;
        excellentGradeScholarshipMoney  = averageGrade * 25;
    }

    if(!isScolarship) {
        console.log("You cannot get a scholarship!");
    } else if (excellentGradeScholarshipMoney >= socialScholarshipMoney) {
        console.log(`You get a scholarship for excellent results ${Math.floor(excellentGradeScholarshipMoney)} BGN`);
    } else if (excellentGradeScholarshipMoney < socialScholarshipMoney) {
        console.log(`You get a Social scholarship ${Math.floor(socialScholarshipMoney)} BGN`);
    }
}
stipendii(["480.00",
"4.60",
"450.00"])


