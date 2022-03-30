function worldSwimmingRecor(input) {
    let record = Number(input[0]);
    let distamnceInMetres = Number(input[1]);
    let timeFor1Meter = Number(input[2]);

    let time = distamnceInMetres * timeFor1Meter;
    let addedTime = Math.floor(distamnceInMetres / 15);
    let realAddedTime = addedTime * 12.5;
    let totalTime = time + realAddedTime;

    if (record <= totalTime) {
        console.log(`No, he failed! He was ${(totalTime-record).toFixed(2)} seconds slower.`)
    } else if(record > totalTime) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    }
    

}
worldSwimmingRecor(["55555.67",
"3017",
"5.03"])

