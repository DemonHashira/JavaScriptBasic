function steps(input) {
  let index = 0;
  let step = 0;  
  let command = input[index];
  index++

  while (step <= 10000) {
      if (command === "Going home") {
          step += Number(input[index]);
          index++
          break;
      }
      let tempStep = Number(command);
      step += tempStep;

      command = input[index];
      index++
  }
  if (step >= 10000) {
      let diff = step - 10000
      console.log(`Goal reached! Good job!`);
      console.log(`${diff} steps over the goal!`)
  } else {
      let diff = 10000 - step;
      console.log(`${diff} more steps to reach goal.`)
  }
}
steps(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"])



