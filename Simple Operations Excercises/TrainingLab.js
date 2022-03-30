function trainingLab(input) {
    let w = input[0];
    let h = input[1];

    let wToMeters = w * 100;
    let hToMeters = h * 100;
    let hall = 100;
    hToMeters = hToMeters - hall;
    let table = hToMeters / 70;

    let row = wToMeters / 120;
    let numberSeats = table * row - 3;
    console.log(table);
    
   




}
trainingLab([15,8.9])