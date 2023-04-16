const fs = require("fs");
const input = fs
  .readFileSync("BOJ10451.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1);

const arr = [];

input.forEach((val, idx) => {
  if (idx % 2 === 1) arr.push(val);
});

for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i].split(" ").map((v) => +v);
}

//dfs (시작 정점에서 깊은 것부터 찾음)

function solution(arr) {
  let graphInfo = [];

  arr.forEach((val, idx) => {
    graphInfo.push([val, idx]);
  });
}
