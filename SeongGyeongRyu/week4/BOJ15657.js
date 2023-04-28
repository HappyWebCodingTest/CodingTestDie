const fs = require("fs");
let input = fs
  .readFileSync("week4/BOJ15657.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((n) => +n));

const [N, M] = input[0];
const arr = input[1].sort((a, b) => a - b);

let permutation = [];
let output = [];

const recursion = (prev) => {
  if (permutation.length === M) {
    output.push(permutation.join(" "));
  } else {
    arr.forEach((_, idx) => {
      if (idx >= prev) {
        permutation.push(arr[idx]);
        recursion(idx);
        permutation.pop();
      }
    });
  }
};
recursion(0);

console.log(output.join("\n"));

// 이 문제를 풀 때 즈음에 드는 의문
// 몇 번째 recursion에서 1,7,8,9를 순차적으로 다 돌게 되는 걸까?

// [1,7,8,9]

//permutation = []
// recursion(0)-1 permutation = [1]
// recursion(0)-2 permutation = [1,1]
// recursion(0)-3 output에 "1 1" push
// recursion(0)-2 로 돌아와서 permutation = [1]
// recursion(0)-2 에서 idx=1로 변경 permutation =[1,7]
// recursion(0) -4 output에 "1 7" push
// recursion(0) -2로 돌아와서  permutation = [1]
// recursion(0)-2 에서 idx=2로 변경 permutation =[1,8]
// recursion(0) -5 output에 "1 8" push
// recursion(0) -2로 돌아와서  permutation = [1]
// recursion(0)-2 에서 idx=3로 변경 permutation =[1,9]
// recursion(0) -6 output에 "1 9" push
// recursion(0) -2로 돌아가야할 차례지만 idx=3이라 동작완료
// recursion(0)-1 permutation.pop()
