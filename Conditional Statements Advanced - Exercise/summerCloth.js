function summerCloth (input) {
    let gradus = Number(input[0]);
    let timeOfDays = input[1];

    switch (timeOfDays) {
        case "Morning":
            if (gradus >= 10 && gradus <= 18) {
              console.log(`It's ${gradus} degrees, get your Sweatshirt and Sneakers.`);
            } else if (gradus >= 18 && gradus <= 24) {
                console.log(`It's ${gradus} degrees, get your Shirt and Moccasins.`);
            } else {
                console.log(`It's ${gradus} degrees, get your T-Shirt and Sandals.`);
            }
            break;
        case "Afternoon":
            if (gradus >= 10 && gradus <= 18) {
                console.log(`It's ${gradus} degrees, get your Shirt and Moccasins.`);
              } else if (gradus >= 18 && gradus <= 24) {
                  console.log(`It's ${gradus} degrees, get your T-Shirt and Sandals.`);
              } else {
                  console.log(`It's ${gradus} degrees, get your Swim Suit and Barefoot.`);
              }
              break;
        case "Evening":
            if (gradus >= 10 && gradus <= 18) {
                console.log(`It's ${gradus} degrees, get your Shirt and Moccasins.`);
              } else if (gradus >= 18 && gradus <= 24) {
                  console.log(`It's ${gradus} degrees, get your Shirt and Moccasins.`);
              } else {
                  console.log(`It's ${gradus} degrees, get your Shirt and Moccasins.`);
              }
              break;          
    }

}
summerCloth(["16",
"Morning"])
summerCloth(["22",
"Afternoon"])
summerCloth(["28",
"Evening"])
