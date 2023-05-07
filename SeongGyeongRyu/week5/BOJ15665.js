const fs = require("fs");
let input = fs
  .readFileSync("week5/BOJ15665.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((n) => +n));

const [N, M] = input[0];
const arr = input[1].sort((a, b) => a - b);

//중복이 들어가면 안돼서 arr을 set으로 바꿨다가 다시 배열로 바꾸기!
const realArr = [...new Set(arr)];

const solution = (M, realArr) => {
  let permutation = [];
  let output = [];

  const recursion = () => {
    if (permutation.length === M) {
      output.push(permutation.join(" "));
    } else {
      realArr.forEach((_, idx) => {
        permutation.push(realArr[idx]);
        recursion();
        permutation.pop();
      });
    }
  };

  recursion();
  return output.join("\n");
};

console.log(solution(M, realArr));
