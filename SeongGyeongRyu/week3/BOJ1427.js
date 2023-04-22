const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "week3/BOJ1427.txt";
const input = fs.readFileSync(filePath).toString().trim().split("");

input.sort((a, b) => b - a);
console.log(input.join(""));

// 근데 이 문제가 왜 재귀 유형에 있을까?
// 구글링해도,,재귀 풀이가 별로 없는데?
// 퀵 정렬로 푼 풀이가 있는데 퀵 정렬이 재귀를 이용했기 때문인 것 같은데...!
