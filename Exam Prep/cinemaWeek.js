function cinemaWeek (input) {
    let nameMovie = input[0];
    let zala = input[1];
    let tickets = Number(input[2]);

    let income = 0;


    if (nameMovie == "A Star Is Born") {
        switch (zala) {
            case "normal":
                income = tickets * 7.50;
                break;
            case "luxury":
                income = tickets * 10.50;
                break;
            case "ultra luxury":
                income = tickets * 13.50;
                break;
        }
    } else if (nameMovie == "Bohemian Rhapsody") {
        switch (zala) {
            case "normal":
                income = tickets * 7.35;
                break;
            case "luxury":
                income = tickets * 9.45;
                break;
            case "ultra luxury":
                income = tickets * 12.75;
                break;
        }
    } else if (nameMovie == "Green Book") {
        switch (zala) {
            case "normal":
                income = tickets * 8.15;
                break;
            case "luxury":
                income = tickets * 10.25;
                break;
            case "ultra luxury":
                income = tickets * 13.25;
                break;
        }
    } else if (nameMovie == "The Favourite") {
        switch (zala) {
            case "normal":
                income = tickets * 8.75;
                break;
            case "luxury":
                income = tickets * 11.55;
                break;
            case "ultra luxury":
                income = tickets * 13.95;
                break;
        }
    }
    console.log(`${nameMovie} -> ${income.toFixed(2)} lv.`);
}
cinemaWeek(["The Favourite",
"ultra luxury",
"34"])