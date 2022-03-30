function cake (input) {
  let index = 0;
  let x = Number(input[index]);
  index ++
  
  let z = Number(input[index]);
  index++

  let sizeCake = x * z;
  let takePieces = input[index];
  index++

  while (takePieces !== "STOP" ) {
      let pieces = Number(takePieces);
      sizeCake -= pieces
      if (sizeCake < 0) {
          break;
      }
      takePieces = input[index];
      index++
  }
  if (sizeCake >= 0) {
      console.log(`${sizeCake} pieces are left.`)
  } else {
      console.log(`No more cake left! You need ${Math.abs(sizeCake)} pieces more.`)
  }
}
cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"]);
cake(["10",
"2",
"2",
"4",
"6",
"STOP"])

