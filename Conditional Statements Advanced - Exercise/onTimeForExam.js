function onTimeForExam (input) {
    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arriveHour = Number(input[2]);
    let arriveMinute = Number(input[3]);

    let timeExamInMin = examHour * 60 + examMinute;
    let timeArriveInMIn = arriveHour * 60 + arriveMinute;
    
    if (timeExamInMin < timeArriveInMIn) {
        console.log("Late")
        let diff = timeArriveInMIn - timeExamInMin;
        if (diff < 60) {
            console.log(`${diff} minutes after the start `)
        } else {
            let h = Math.floor(diff / 60);
            let m = diff % 60;
            if (m < 10) {
                console.log(`${h}:0${m} hours after the start`)
            } else {
               console.log(`${h}:${m} hours after the start`)
            }
            
        }
    } else if (timeExamInMin === timeArriveInMIn || timeExamInMin - timeArriveInMIn <= 30 ) {
        console.log("On time") 
        if ( timeExamInMin - timeArriveInMIn !== 0) {
            let diff = timeExamInMin - timeArriveInMIn;
            console.log(`${diff} minutes before the start`);
        }

    } else {
        console.log("Early")
        let diff = timeExamInMin - timeArriveInMIn;
        if (diff < 60) {
            console.log(`${diff} minutes before the start`)
        } else {
            let h = Math.floor(diff / 60);
            let m = diff % 60;
            if (m < 10) {
                console.log(`${h}:0${m} hours before the start`)
            } else {
                console.log(`${h}:${m} hours before the start`)
            }
        }
    }
}
onTimeForExam(["11",
"30",
"8",
"12"]);











