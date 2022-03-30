function shop(input){
    let fruit = input[0];
    let day = input[1];
    let count = Number(input[2]);
    let total = 0;
    isError = false
  
  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      switch (fruit) {
        case "banana":
          total = count * 2.50;
          break;
        case "apple":
          total = count * 1.20;
          break;
        case "orange":
          total = count * 0.85;
          break;
        case "grapefruit":
          total = count * 1.45;
          break;
        case "kiwi":
          total = count * 2.70;
          break;
        case "pineapple":
          total = count * 5.50;
          break;
        case "grapes":
          total = count * 3.85;
          break;
        default:
          console.log("error");
          break;
      }
      break;
    case "Saturday":
    case "Sunday":
      switch (fruit) {
        case "banana":
          total = count * 2.7;
          break;
        case "apple":
          total = count * 1.25;
          break;
        case "orange":
          total = count * 0.90;
          break;
        case "grapefruit":
          total = count * 1.60;
          break;
        case "kiwi":
          total = count * 3;
          break;
        case "pinеapple":
          total = count * 5.6;
          break;
        case "grapes":
          total = count * 4.20;
          break;
        default:
          console.log("error");
          break;
      }
      break;
    default:
      console.log("error");
      break;
      }
      
      if (isError) {
          console.log("error")
      } else {
        console.log(total.toFixed(2));
      }
      
  }
fruitShopSecondTry(["apple",
"Tuesday",
"2"])

