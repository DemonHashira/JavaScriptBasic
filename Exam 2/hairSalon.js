function hairSalon(input) {
    let index = 0;
    let goal = Number(input[index]);
    index++
    let command = input[index]
    let income = 0;

    while (command != "closed") {
        let service = input[index];
        index++
        let servicetype = input[index]
        index++

        if (income >= goal) {
            break;
        }
        
        if (service == "haircut") {
            if (servicetype == "mens") {
                income += 15
            } else if (servicetype == "ladies") {
                income += 20
            } else {
                income += 10
            }
        } else if (service == "color") {
            if (servicetype == "touch up") {
                income += 20
            } else {
                income += 30
            }
        }
        command = input[index];
    }
    if (income >= goal) {
        console.log(`You have reached your target for the day!`);
    } else {
        let needed = goal - income;
        console.log(`Target not reached! You need ${needed}lv. more.`)
    }
    console.log(`Earned money: ${income}lv.`)
}
hairSalon(["300","haircut","ladies","haircut","kids","color","touch up","closed"]);