const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter some number?", (number) => {
  const arr = number.split(",");
  if (arr) {
    let loopNumber;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      loopNumber = Number(arr[i]);
      if (!newArr.includes(loopNumber)) {
        newArr.push(loopNumber);
      }
    }
    console.log(newArr);
  }
  rl.close();
});
