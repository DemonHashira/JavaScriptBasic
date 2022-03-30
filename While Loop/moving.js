function moving (input) {
    let w = Number(input[0]);
    let l = Number(input[1]);
    let h = Number(input[2]);
    let index = 3;

    let avaiableSpace = w * l * h;

    while(input[index] !== "Done") {
        avaiableSpace = avaiableSpace - Number(input[index]);
        index++
        if (avaiableSpace < 0) {
            console.log(`No more free space! You need ${Math.abs(avaiableSpace)} Cubic meters more.`)
            break;
        } 
    }
    if (avaiableSpace >= 0) {
        console.log(`${avaiableSpace} Cubic meters left.`)
}
}
moving(["10",
"1",
"2",
"4",
"6",
"Done"])

