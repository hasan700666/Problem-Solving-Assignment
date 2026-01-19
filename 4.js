const { log } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter some number?", (number) => {
  const arr = number.split(",");
  if (arr) {
    let loopNumber;
    let mex = 0;
    for (let i = 0; i < arr.length; i++) {
      loopNumber = Number(arr[i]);
      if (mex < loopNumber) {
        mex = loopNumber;
      }
    }
    console.log(mex);
  }
  rl.close();
});
