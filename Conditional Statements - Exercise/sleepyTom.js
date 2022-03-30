function sleepingCatTom(input) {
    let freeDays = Number(input[0]);
    let norma = 30000;
    let worktime = 63;
    let freeTime = 127;
    let year = 365;

    let PochivnikDays = freeDays * 127;
    let Rabotnidni = 365 - freeDays;
    let timePlay = Rabotnidni * worktime;
    let realTImePlay = PochivnikDays + timePlay
    let hoursAndMinutes = 0
    let hours = 0;
    let minutes = 0
    if (norma > realTImePlay) {
        hoursAndMinutes = norma - realTImePlay;
        hours = Math.floor(hoursAndMinutes / 60);
        minutes = hoursAndMinutes % 60;
        console.log("Tom sleeps well");
        console.log(`${hours} hours and ${minutes} minutes less for play`)  
    } else if (norma < realTImePlay) {
        hoursAndMinutes = realTImePlay - norma;
        hours = Math.floor(hoursAndMinutes / 60);
        minutes = hoursAndMinutes % 60;
        console.log("Tom will run away");
        console.log(`${hours} hours and ${minutes} minutes more for play`)
    }
    
}
sleepingCatTom([20]);
sleepingCatTom([113])
