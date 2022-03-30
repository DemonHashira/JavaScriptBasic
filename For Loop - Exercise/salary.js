function salary (input) {
    let openTabs = Number(input[0]);
    let salaryWorking = Number(input[1]);
    let index = 2
    for (let i = 1; i <= openTabs; i++) {
        let site = input[index];
        index++
        if (site == "Facebook") {
            salaryWorking = salaryWorking - 150;
        } else if (site == "Instagram") {
            salaryWorking = salaryWorking - 100;
        } else if (site == "Reddit" ) {
            salaryWorking = salaryWorking - 50;
        }
    }
    if (salaryWorking <= 0) {
        console.log("You have lost your salary." )
    } else {
        console.log(salaryWorking)
    }
}