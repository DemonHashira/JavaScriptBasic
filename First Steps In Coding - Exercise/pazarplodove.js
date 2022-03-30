function pazarPlodove (input) {
    let strawberyPRice = Number(input[0]);
    let bananaKG = Number(input[1]);
    let orangeKG = Number(input[2]);
    let raspberry = Number(input[3]);
    let strawberryKG = Number(input[4]);

    let raspberryPrice = strawberyPRice / 2;
    let orangePrice = raspberryPrice - (0.4 * raspberryPrice);
    let bananaPrice = raspberryPrice - (0.8 * raspberryPrice);
    let sumRaspberry = raspberry * raspberryPrice;
    let sumOrange = orangeKG * orangePrice;
    let sumBanana = bananaKG * bananaPrice;
    let sumStrawberry = strawberryKG * strawberyPRice;
    let overAllSum = sumRaspberry + sumOrange + sumBanana + sumStrawberry;
    console.log(overAllSum);
}
pazarPlodove(["48",
"10",
"3.3",
"6.5",
"1.7"])
