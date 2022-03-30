function ticketsForCinema (input) {
    let studentTickets = 0;
    let standartTicekts = 0;
    let kidTickets = 0;
    let totalTickets = 0;

    for (let index = 0; index < input.length; index++) {
        if (input[index] == "End" || input[index] == "Finish") {
            break;
        }

        let nameFilm = input[index];
        index++

        let freeSpace = Number(input[index]);
        index++
        
        let currentTickets = 0;

        while (input[index] != "End" && input[index] != "Finish") {
            currentTickets++
            totalTickets++

            if (input[index] == "student") {
                studentTickets++
            } else if (input[index] == "standard") {
                standartTicekts++
            } else {
                kidTickets++
            }

            if (currentTickets == freeSpace) {
                break;
            }
            index++

        }
        console.log(`${nameFilm} - ${((currentTickets/freeSpace) * 100).toFixed(2)}% full.`)
    }
    console.log(`Total tickets: ${totalTickets}`)
    console.log(`${((studentTickets/totalTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standartTicekts/totalTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidTickets/totalTickets) * 100).toFixed(2)}% kids tickets.`);
}
ticketsForCinema(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])
