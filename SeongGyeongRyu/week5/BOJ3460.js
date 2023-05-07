const fs = require("fs");
let input = fs
  .readFileSync("week5/BOJ3460.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

const [N, ...arr] = input;

const makeBinary = (num) => {
  let number = num;
  let binary = [];
  while (number !== 1) {
    binary.push(number % 2);
    number = Math.floor(number / 2);
  }
  binary.push(number);

  return binary.reverse().join("");
};

let ans = [];
let temp = arr.map((val) => makeBinary(val)).map((v) => +v);
console.log(temp);

console.log(ans.join(" "));
