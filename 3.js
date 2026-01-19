const { log } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isPalindrome(str) {
  str = str.toLowerCase();
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

rl.question("", (text) => {
  if (text) {
    console.log(isPalindrome(text));
  }
  rl.close();
});
