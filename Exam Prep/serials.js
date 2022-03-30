function serialsx (input) {
    let budget = Number(input[0]);
    let serials = Number(input[1]);
    
    let money = 0

    for (let i = 2; i < input.length; i++) {
        let name = input[i];
        i++
        let serialPrice = Number(input[i]);

        if (name == "Thrones") {
            money = serialPrice - (serialPrice * 0.50)
        } else if (name == "Lucifer") {
            money = serialPrice - (serialPrice * 0.40)
        } else if (name == "Protector") {
            money = serialPrice - (serialPrice * 0.30)
        } else if (name == "TotalDrama") {
            money = serialPrice - (serialPrice * 0.20)
        } else if (name == "Area") {
            money = serialPrice - (serialPrice * 0.10);
        } else {
            money = serialPrice
        }
        budget = budget - money
    }
    if (budget >= 0) {
        console.log(`You bought all the series and left with ${budget.toFixed(2)} lv.`)
    } else {
        console.log(`You need ${(budget * -1).toFixed(2)} lv. more to buy the series!`)
    }
}
serialsx(["25",
"6",
"Teen Wolf",
"8",
"Protector",
"5",
"TotalDrama",
"5",
"Area",
"4",
"Thrones",
"5",
"Lucifer",
"9"])

