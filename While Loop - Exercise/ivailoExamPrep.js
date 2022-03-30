function everest (input) {
    let index = 0;
    let command = input[index];
    index++
 
    let alreadyWalked = 5364;
    let kilometersClimbed = 0;
    let days = 2;
    let currentKilometers = 0
    while (command !== "END") {

        if (days >= 5) {
            console.log("Failed!")
            console.log(kilometersClimbed)
            break;
        }
        if (kilometersClimbed >= 8848){
            console.log(`Goal reached for ${days} days!`)
            break;
        }
        if (command === "Yes"){
            days++
        }
        
        currentKilometers = alreadyWalked + Number(input[index]);
        kilometersClimbed += currentKilometers;
 
        if(kilometersClimbed >= 8848){
            console.log(`Goal reached for ${days} days!`)
            break;
        }
        command = input[index];
        index++
        index++
    }
}
everest(["Yes","1000","Yes","945","No","1200","END"])
