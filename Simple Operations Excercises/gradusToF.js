function celciousToFarenheit(input) {
    let celcious = Number(input[0]);
    let farenhait = celcious * 1.8 + 32;
    // 	°F = °C × 1,8 + 32
    console.log(farenhait.toFixed(2));
}
celciousToFarenheit([25]);