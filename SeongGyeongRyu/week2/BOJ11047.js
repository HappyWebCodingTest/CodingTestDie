//https://www.acmicpc.net/problem/11047

let fs = require("fs");
let input = fs
  .readFileSync("week2/BOJ10773.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((v) => +v);
