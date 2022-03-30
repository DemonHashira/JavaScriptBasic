function tableMulty (input) {
    let num = Number(input[0]);
    for (let i = 1; i <= 10; i++) {
        let table = i * num 
        console.log(`${i} * ${num} = ${table}`)
    }
}
tableMulty([5])