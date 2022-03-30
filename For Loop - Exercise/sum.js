function numsN (input) {
    let n = Number(input[0]);
    let leftSum = 0;
    let rightSum = 0;
    let index = 3

    for (let i = 1; i <= n; i++) {
        leftSum += Number(input[i])
    }
    for (let i = 1; i <= n; i++) {
        rightSum += Number(input[index])
        index++
    }
    if (leftSum == rightSum) {
        console.log (`Yes, sum = ${leftSum} `)
    } else {
        let diff = Math.abs(leftSum - rightSum)
        console.log(`No, diff = ${diff}`)
    }
}
numsN([3,90,9,50,50])