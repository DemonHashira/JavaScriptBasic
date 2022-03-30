function literature(input) {
    let pagesNumber = Number(input[0]);
    let pages = Number(input[1]);
    let daysNumber = Number(input[2]);

    let obshtoVreme = pagesNumber / pages; 
    let chasoveNaDay = obshtoVreme / daysNumber;
    console.log(chasoveNaDay);
}
literature(["212",
"20",
"2"])
