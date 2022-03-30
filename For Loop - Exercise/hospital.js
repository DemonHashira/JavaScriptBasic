function hospital (input) {
    let period = input[0];
    
    let doctors = 7;
    let treatedPatients = 0;
    let untreatedPatients = 0

    for (let i = 1; i <= period; i++) {
        let patientsNumber = Number(input[i]);

        if (i % 3 == 0) {
            if (untreatedPatients > treatedPatients) {
                doctors++
            }
        }
        if (patientsNumber <= doctors) {
            treatedPatients += patientsNumber
        } else {
            untreatedPatients += patientsNumber - doctors;
            treatedPatients += patientsNumber - (patientsNumber - doctors)
        }
    }
    console.log(`Treated patients: ${treatedPatients}.`)
    console.log(`Untreated patients: ${untreatedPatients}.`)
}
hospital([4,7,27,9,1])