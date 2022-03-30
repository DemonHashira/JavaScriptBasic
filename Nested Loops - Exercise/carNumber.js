function carNumber(input) {
    let start = Number(input[0]);
    let finish = Number(input[1]);
    let result = "";
    for (let i = start; i <= finish; i++) {
        for (let j = start; j <= finish; j++) {
            for (let k = start; k <= finish; k++) {
                for (let l = start; l <= finish; l++) {

                    if (i % 2 == 0) {
                        if (l % 2 != 0) {
                            if (i > l && (j + k) % 2 == 0) {
                                result = result + i + j + k + l + " ";

                            }
                        }
                    } else {
                        if (i % 2 != 0) {
                            if (l % 2 == 0) {
                                if (i > l && (j + k) % 2 == 0) {
                                    result = result + i + j + k + l + " ";

                                }
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(result);
}
carNumber([3, 5]);