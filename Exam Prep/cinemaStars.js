function cinemaStars (input) {
let budgetActiors = Number(input[0]);

    for (let i = 1; i < input.length; i++) {
        if (input[i] == "ACTION") {
            break;
        }
        if (input[i].length > 15) {
            budgetActiors = budgetActiors - budgetActiors * 0.20
        } else {
            i++
            budgetActiors = budgetActiors - Number(input[i]);
        }

        if (budgetActiors < 0) {
            break;
        }
    }
    if (budgetActiors >= 0) {
        console.log(`We are left with ${budgetActiors.toFixed(2)} leva.`)
    } else {
        console.log(`We need ${(budgetActiors * -1).toFixed(2)} leva for our actors.`)
    }
}
cinemaStars(["170000",
"Ben Affleck",
"40000.50",
"Zahari Baharov",
"80000",
"Tom Hanks",
"2000.99",
"ACTION"])
