function presents (input) {
    let n = Number(input[0]);
    let m = Number(input[1]);
    let s = Number(input[2]);
    let result = "";

    for (let i = m; i >= n; i--) {
        if (i % 2 == 0 && i % 3 == 0 && s % i != 0) {
            result += i + " ";
            if (i == s && s % i != 0) {
                break;
            }
        } 
    }
    console.log(result)
}

function delene() {
    let a = 55;
    console.log(a / 0)
}
delene()
