function catLife (input) {
    let porodaCat = input[0];
    let gender = input[1];

    let catMonths = 0;
    let years = 0;
    let isValid = true;

    if (gender == "m") {
        switch(porodaCat) {
            case "British Shorthair":
                years = 13 * 12
                catMonths = years / 6
                break;
            case "Siamese":
                years = 15 * 12
                catMonths = years / 6
                break;
            case "Persian":
                years = 14 * 12
                catMonths = years / 6
                break;
            case "Ragdoll":
                years = 16 * 12
                catMonths = years / 6
                break;
            case "American Shorthair":
                years = 12 * 12
                catMonths = years / 6
                break;
            case "Siberian":
                years = 11 * 12
                catMonths = years / 6
                break;
            default:
                console.log(`${porodaCat} is invalid cat!`)
                isValid = false
                break;
        }
    } else if (gender == "f") {
        switch(porodaCat) {
            case "British Shorthair":
                years = 14 * 12
                catMonths = years / 6
                break;
            case "Siamese":
                years = 16 * 12
                catMonths = years / 6
                break;
            case "Persian":
                years = 15 * 12
                catMonths = years / 6
                break;
            case "Ragdoll":
                years = 17 * 12
                catMonths = years / 6
                break;
            case "American Shorthair":
                years = 13 * 12
                catMonths = years / 6
                break;
            case "Siberian":
                years = 12 * 12
                catMonths = years / 6
                break;
            default:
                console.log(`${porodaCat} is invalid cat!`)
                isValid = false
                break;
        }
    }

    if (isValid) {
        console.log(`${catMonths} cat months`)
    }
}
catLife(["Tom",
"m"])




