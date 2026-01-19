const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("write some text? ", (taxt) => {
  if (taxt) {
    let result = [];
    for (let i = 0; i < taxt.length; i++) {
      if (
        taxt[i] === "a" ||
        taxt[i] === "e" ||
        taxt[i] === "i" ||
        taxt[i] === "o" ||
        taxt[i] === "u"
      ) {
        result = [taxt[i], ...result];
      }
    }
    console.log(result.length);
  }
  rl.close();
});
