function birthdayParty(input) {
    let naemNaZala = Number(input[0]);
    let cake = naemNaZala * 0.2;
    let drinks = cake * 0.55;
    let animator = naemNaZala / 3 
    let neededSum = naemNaZala + cake + drinks + animator;
    console.log(neededSum);
}
birthdayParty(["2250"])