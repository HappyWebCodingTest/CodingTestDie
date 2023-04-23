const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const arrN = input.shift().split(" ");
const M = Number(input.shift());
const arrM = input.shift().split(" ");
let answer = [];
let cardMap = new Map();

for (let i = 0; i < N; i++) {
  if (cardMap.has(arrN[i])) {
    cardMap.set(arrN[i], cardMap.get(arrN[i]) + 1);
  } else {
    cardMap.set(arrN[i], 1);
  }
}

for (let i = 0; i < M; i++) {
  if (cardMap.has(arrM[i])) {
    answer.push(cardMap.get(arrM[i]));
  } else {
    answer.push(0);
  }
}

console.log(answer.join("\n"));
