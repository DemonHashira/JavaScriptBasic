function timeAgain(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let TotalMin = hours * 60 + minutes;
    let TotalMinAfter = TotalMin + 15 

    let TotalHours = Math.floor(TotalMinAfter / 60);
    if (TotalHours > 23) {
        TotalHours = 0
    }
    let TotalMins = TotalMinAfter % 60;
    if (TotalMins < 10) {
        console.log(`${TotalHours}:0${TotalMins}`);
    } else { 
        console.log(`${TotalHours}:${TotalMins}`)
    }

}
timeAgain(["1","46"])
timeAgain(["0","01"])