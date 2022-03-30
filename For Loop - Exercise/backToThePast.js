function backToThePAst (input) {
    let nasledeniMoney = Number(input[0]);
    let year = Number(input[1]);

    for (let i = 1800; i <= year; i++) {
        if (i % 2 == 0) {
            nasledeniMoney -= 12000
        } else {
            nasledeniMoney -= (12000 + ( 18 + (i - 1800)) * 50);
        }
    }
    if (nasledeniMoney >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${nasledeniMoney.toFixed(2)} dollars left.`)
    } else {
        console.log(`He will need ${(nasledeniMoney * -1).toFixed(2)} dollars to survive.`)
    }
}
backToThePAst([100000.15,
    1808
    ])

    