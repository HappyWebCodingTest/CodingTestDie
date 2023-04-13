// S의 최솟값을 구하려면 (배열 A의 작은 수와 배열 B에서 큰 수), (배열 A의 큰 수와 배열 B의 작은수) 를 곱하면 된다.
// sort를 사용해서 배열 A는 오름차순, 배열 B는 내림차순으로 정리했다.
// 처음에는 for문을 통해서 배열 순회하면서 곱해줬는데 자바스크립트 메서드를 사용해보고 싶어서 reduce사용했다
// 문제 조건은 배열 B 수정이 불가능한데 그러면 진짜 아예 못풀겠어서 백준 댓글을 확인해보니 다 수정해서 풀어서 나도 그랬다.
let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

let arrA = input[0].split(" ").map((i) => Number(i));
let arrB = input[1].split(" ").map((i) => Number(i));
arrA.sort((a, b) => a - b);
arrB.sort((a, b) => b - a);

const result = arrA.reduce((acc, curr, index) => {
  return acc + curr * arrB[index];
}, 0);
console.log(result);
