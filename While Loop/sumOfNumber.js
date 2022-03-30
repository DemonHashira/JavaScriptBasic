function sumOfNumber (input){
  let n = Number(input[0]);
  let sum = 0;
  let index = 1;
  
  while (sum < n) {
    let calculatedNum = Number(input[index]);
    index++
    sum += calculatedNum
  }
  console.log(sum)
}
sumOfNumber([100,10,20,30,45]);