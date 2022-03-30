function numberPyramid(input) {
    let n = Number(input[0]);
    let current = 1;
    let flag = false;
    let line = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            if (current > n) {
                flag = true
                break;
            }
            line += current + " ";
            current++;
        }
        console.log(line);
         line = "";
         if (flag) {
            break;
        }
    }
}
numberPyramid([100])