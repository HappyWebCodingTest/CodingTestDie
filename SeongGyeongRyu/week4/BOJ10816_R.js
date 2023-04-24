//숫자 카드는 정수 하나가 적혀져 있는 카드이다.
//상근이는 숫자 카드 N개를 가지고 있다. 정수 M개가 주어졌을 때
//이 수가 적혀있는 숫자 카드를 상근이가 몇 개 가지고 있는지 구하는 프로그램을 작성하시오.

const fs = require("fs");
let input = fs
  .readFileSync("./BOJ10816.txt")
  .toString()
  .trim()
  .split("\n")
  .filter((_, index) => index % 2 === 1)
  .map((v) => v.split(" ").map((n) => +n));

const N = input[0];
const M = input[1];

/*
const map = new Map();
let answer = "";

for (let i = 0; i < M.length; i++) {
  map.set(M[i], 0);
}

N.forEach((v) => {
  if (map.has(v)) {
    map.set(v, map.get(v) + 1);
  }
});

for (const value of map.values()) {
  answer += value + " ";
}

console.log(answer.trim());

// key, value 모두 필요한 경우에는
// for (const [key,value] of map) {
//     answer += value + " ";
//   }

*/

//반례가 있었다! M에 숫자가 중복으로 나오는 경우
/*
3
-1 0 1
5
1 0 -1 0 1
*/

const map = new Map();
let answer = "";

for (let i = 0; i < M.length; i++) {
  map.set(M[i], 0);
}

N.forEach((v) => {
  if (map.has(v)) {
    map.set(v, map.get(v) + 1);
  }
});

//N이나 map에 대해 반복문을 돌리면 중복인 값들이 포함이 되지 않으니까
//M에 대해 반복문을 돌리고, map.get을 사용해서 값을 가져온다!
for (let i = 0; i < M.length; i++) {
  answer += map.get(M[i]) + " ";
}

console.log(answer.trim());

//set을 사용해보려고 했으나 set은 key-value 쌍이 아니고 중복을 아예 없애버리기 때문에 해당 문제에는 적합하지 않음
