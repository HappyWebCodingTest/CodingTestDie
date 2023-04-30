const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...input] = fs.readFileSync(filePath).toString().split("\n");

const arr = input[0]
  .split(" ")
  .map((v) => +v)
  .sort((a, b) => a - b);

let answer = 0;
for (let i = 0; i < n; i++) {
  let sum = arr[i];
  for (let j = 0; j < i; j++) {
    sum += arr[j];
  }
  answer += sum;
}

console.log(answer);
