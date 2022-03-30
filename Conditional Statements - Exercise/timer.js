function sumSeconds(input) {
    let FirstTime = Number(input[0]);
    let SecondTime = Number(input[1]);
    let ThirdTime = Number(input[2]);

    let TotalTime = FirstTime + SecondTime + ThirdTime
    let minutes = Math.floor(TotalTime / 60);
    let seconds = TotalTime % 60;
    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`)
    } else {
        console.log(`${minutes}:${seconds}`)
    }
}
sumSeconds([35,
    45,
    44])