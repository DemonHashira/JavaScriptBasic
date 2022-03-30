function highJump1 (input) {
    let targetHeight = Number(input[0]);
    let starHeight = targetHeight - 30;

    let jumpCounter = 0;
    let failAttempts = 0;
    let flag = true
    for (let i = 1; i < input.length; i++) {
        let currentHeight = Number(input[i]);
        jumpCounter++
        if (currentHeight > starHeight) {
            if (starHeight >= targetHeight) {
                flag = true
                console.log(`Tihomir succeeded, he jumped over ${starHeight}cm after ${jumpCounter} jumps.`)
            }
            starHeight += 5
            failAttempts = 0
        } else {
            failAttempts++
        }


        if (failAttempts == 3 || flag == false) {
            console.log(`Tihomir failed at ${starHeight}cm after ${jumpCounter} jumps.`)
        }
    }
}
highJump1(["250",
"225",
"224",
"225",
"228",
"231",
"235",
"234",
"235"])

