const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? ", (name) => {
  if (name) {
    let result = [];
    for (let i = 0; i < name.length; i++) {
      result = [name[i], ...result];
    }
    console.log(result.join(""));
  }

  rl.close();
});
