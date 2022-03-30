function firm(input) { 
    let neededHours = input[0];
    let avaiableDays = input[1];
    let urgentWorkingEmployes = input[2];

    let workingHours = (0.10 * avaiableDays) ;
    let realWorkingHours = (avaiableDays - workingHours) * 8;
    let urgentHours = urgentWorkingEmployes * (2 * avaiableDays);
    let sumHours = Math.floor(realWorkingHours + urgentHours);
    if(sumHours >= neededHours) {
        let ostavashti = sumHours - neededHours;
        console.log(`Yes!${ostavashti} hours left.`);
    } else if (sumHours <= neededHours) {
        let nedostigashti = neededHours - sumHours;
        console.log(`Not enough time!${nedostigashti} hours needed.`)
    }
}
firm([99,3,1]);

