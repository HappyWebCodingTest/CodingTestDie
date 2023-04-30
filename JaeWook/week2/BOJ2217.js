// 쉬운문제였다.
// 로프의 중량이 높아 질 수록 로프를 사용할 수 있는 수는 줄어든다는 생각을 하면서 풀었다.
// 10kg 중량은 10,15,20,40 등 많은 로프에 달 수 있지만 40kg짜리 중량은 40로프에만 달 수 있다.

let [n, ...ropes] = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

let MAX = 0;
ropes.sort((a, b) => a - b);
for (let i = 0; i < n; i++) {
  if (MAX < ropes[i] * (n - i)) {
    MAX = ropes[i] * (n - i);
  }
}

console.log(MAX);
