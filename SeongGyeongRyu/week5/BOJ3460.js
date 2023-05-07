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

  return binary;
};

const findOne = (arr) => {
  let oneIndexList = [];
  arr.forEach((val, idx) => {
    if (val === 1) {
      oneIndexList.push(idx);
    }
  });

  return oneIndexList.join(" ");
};

let ans = [];
arr.forEach((val) => ans.push(makeBinary(val)));
ans.forEach((order) => {
  console.log(findOne(order));
});
