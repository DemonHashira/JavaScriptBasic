function newHouse (input) {
    let typeFlowers = input[0];
    let amountFlowers = Number(input[1]);
    let budged = Number(input[2]);
    let price = 0;
//"Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"
    switch (typeFlowers) {
        case "Roses":
            price = amountFlowers * 5; 
            if (amountFlowers > 80) {
                price = price * 0.90;
            }
            break;
        case "Dahlias":
            price = amountFlowers * 3.80; 
            if (amountFlowers > 90) {
                price = price * 0.85;
            } 
            break;
        case "Tulips":
            price = amountFlowers * 2.80; 
            if (amountFlowers > 80) {
                price = price * 0.85
            } 
            break;
        case "Narcissus":
            price = amountFlowers * 3; 
            if (amountFlowers < 120) {
                price = price * 1.15;
            } 
            break;
        case "Gladiolus":
            price = amountFlowers * 2.50; 
            if (amountFlowers < 80) {
                price = price * 1.20;
            } 
            break;
        
    }
    if (budged >= price) {
        let diff = budged - price;
        console.log(`Hey, you have a great garden with ${amountFlowers} ${typeFlowers} and ${diff.toFixed(2)} leva left.`)
    } else {
        let diff = price - budged;
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
    }
}



function boat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let count = input[2];
    let price = 0;
   
    switch(season){
      case "Spring":
          price = 3000;
          if(count <= 6){
            price = price * 0.9;
          }else if(count >= 7 && count <= 11){
            price = price * 0.85;
          }else{
            price = price * 0.75;
          }
          if(count % 2 === 0){
            price = price * 0.95;
          }
        break;
      case "Summer":
      case "Autumn":
          price = 4200;
          if (count <= 6) {
            price = price * 0.9;
          } else if (count >= 7 && count <= 11) {
            price = price * 0.85;
          } else {
            price = price * 0.75;
          }
          if (count % 2 === 0 && season !== "Autumn" ) {
            price = price * 0.95;
          }
        break;
      case "Winter":
          price = 2600;
          if (count <= 6) {
            price = price * 0.9;
          } else if (count >= 7 && count <= 11) {
            price = price * 0.85;
          } else {
            price = price * 0.75;
          }
          if (count % 2 === 0) {
            price = price * 0.95;
          }
        break;
    }
    if(budget >= price){
      let diff = budget - price;
      console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    }else{
      let diff = Math.abs(budget - price);
      console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }
  }


