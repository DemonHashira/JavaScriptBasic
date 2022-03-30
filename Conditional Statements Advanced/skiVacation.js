function skiHollyday(input) {
  let days = Number(input[0]);
  let kindOfRoom = input[1];
  let grade = input[2];
 
  let room = 18.00;
  let apartment = 25.00;
  let presidentApart = 35.00;

  let discount = 0;
  let nights = days - 1;
  let finalPrice = 0;
  


  switch (kindOfRoom) {
      case "room for one person":
          if (days<10) {
              discount = 0;
          } else if (days>=10 && days<=15) {
              discount = 0;
          } else {
              discount = 0;
          } 
      break;
          
      case "apartment":
          if (days<10) {
              discount = apartment * nights * 0.3;
          } else if (days>=10 && days<=15) {
              discount = apartment * nights * 0.35;
          } else {
              discount = apartment * nights * 0.5;
          } 

      break; 
      case "president apartment":
          if (days<10) {
              discount = presidentApart * nights * 0.1;
          } else if (days>=10 && days<=15) {
              discount = presidentApart * nights * 0.15;
          } else {
              discount = presidentApart * nights * 0.2;
          }  
      break;

   }    
      
      if (kindOfRoom == "room for one person" ) {
          price = (nights * room) - discount
      } else if (kindOfRoom == "apartment") {
          price = (nights * apartment) - discount
      } else if (kindOfRoom == "president apartment") {
          price = (nights * presidentApart) - discount
      }
  
      if (grade == "positive") {
          finalPrice = price + (0.25*price)
      } else if (grade == "negative") {
          finalPrice = price - (0.1*price)
      }

  console.log(finalPrice.toFixed(2))

}

skiHollyday(["30",
"president apartment",
"negative"]);



