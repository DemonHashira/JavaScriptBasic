function party(input) {
    let neededMoney = Number(input[0]);
    let lubovniPoslaniq = Number(input[1]);
    let vosakRozi = Number(input[2]);
    let keysHolder = Number(input[3]);
    let karikuturs = Number(input[4]);
    let luckSuprise = Number(input[5]);

    let articulsAmount = lubovniPoslaniq + vosakRozi + keysHolder + karikuturs + luckSuprise;
    let sumMoney = lubovniPoslaniq * 0.60 + vosakRozi * 7.20 + keysHolder * 3.60 + karikuturs * 18.20 + luckSuprise * 22;

    if (articulsAmount >= 25) {
        sumMoney = sumMoney - (sumMoney * 0.35);
    }
    
    let razhodHosting = sumMoney - (sumMoney * 0.10)
    
    if (razhodHosting >= neededMoney) {
        let left = razhodHosting - neededMoney;
        console.log(`Yes! ${left.toFixed(2)} lv left.`)
    } else {
        let needed = neededMoney - razhodHosting;
        console.log(`Not enough money! ${needed.toFixed(2)} lv needed.`)
    }
}
party([40.8,20,25,30,50,10])