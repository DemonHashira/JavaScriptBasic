function workingOrFreeDay (input) {
    let name = input[0];

    switch (name) {
        case "Monday":
        case "Tuesday":
        case  "Wednesday":
        case "Thursday":
        case "Friday":
            console.log("Working day"); 
            break;
        case "Saturday":
        case "Sunday":
            console.log("Weekend");
            break
        default:
            console.log("Error")    
        
    }
}
workingOrFreeDay(["Monday"])
workingOrFreeDay(["Tuesday"])
workingOrFreeDay(["Wednesday"])
workingOrFreeDay(["Thursday"])
workingOrFreeDay(["Friday"])
workingOrFreeDay(["Saturday"])
workingOrFreeDay(["Sunday"])
workingOrFreeDay(["123"])