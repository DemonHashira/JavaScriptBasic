function ticketsForMatch(input) {
    let budget = Number(input[0]);
    let category = input[1];
    let people = Number(input[2])

    let moneyleft = 0
    

    if (category === "VIP") {
        if (people >= 1 && people <= 4) {
            moneyleft = budget * 0.25;
        } else if (people >= 5 && people <= 9) {
            moneyleft = budget * 0.40;
        } else if (people >= 10 && people <= 24) {
            moneyleft = budget * 0.50;
        } else if (people >= 25 && people <= 49) {
            moneyleft = budget * 0.60
        } else {
            moneyleft = budget * 0.75
        }
    } else if (category === "Normal") {
        if (people >= 1 && people <= 4) {
            moneyleft = budget * 0.25;
        } else if (people >= 5 && people <= 9) {
            moneyleft = budget * 0.40;
        } else if (people >= 10 && people <= 24) {
            moneyleft = budget * 0.50;
        } else if (people >= 25 && people <= 49) {
            moneyleft = budget * 0.60
        } else {
            moneyleft = budget * 0.75
        }
    }
    if (category === "Normal") {
        let ticketPrice = 249.99 * people;
        if (ticketPrice < moneyleft ) {
            let left = moneyleft - ticketPrice;
            console.log(`Yes! You have ${left.toFixed(2)} leva left.`);
        } else {
            let needed = ticketPrice - moneyleft;
            console.log(`Not enough money! You need ${needed.toFixed(2)} leva.`)
        }

    } else if (category === "VIP") {
        let ticketPrice2 = 499.99 * people;
        if (ticketPrice2 < moneyleft ) {
            let left = moneyleft - ticketPrice2;
            console.log(`Yes! You have ${(left).toFixed(2)} leva left.`);
        } else {
            let needed = ticketPrice2 - moneyleft;
            console.log(`Not enough money! You need ${(needed).toFixed(2)} leva.`)
        }
    }
}
ticketsForMatch([50000,
    "Normal",
    200])
