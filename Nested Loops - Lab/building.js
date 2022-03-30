function building (input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);
    
    for (let i = floors; i > 0; i--) {
        let str = "";
        for (let j = 0; j < rooms; j++) {
            if (i == floors) {
                str += `L${i}${j} `
            } else {
                if (i % 2 == 0) {
                    str += `O${i}${j} `
                } else {
                    str += `A${i}${j} `
                }
            }
        }
        console.log(str)
    }
}
building(["6", "4"])