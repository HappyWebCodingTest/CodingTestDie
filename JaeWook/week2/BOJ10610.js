// 30은 10의 배수이기 때문에 무조건 0이 들어가 있어야 30의 배수가 될 수 있다.
// 0이 있어도 각 자리수의 합이 3의 배수여야 한다.
// 2개의 조건을 만족해야한다.
// 그 이후 내림차순으로 정렬하면 제일 큰 수를 알 수 있다.
// trim으로 공백을 제거해주자

let input = require("fs").readFileSync("input.txt").toString().trim();

if (!input.split("").includes("0")) {
  console.log(-1);
} else {
  let arr = input.split("").map((v) => +v);
  let sumArr = arr.reduce((acc, v) => acc + v);
  if (sumArr % 3 == 0) {
    arr.sort((a, b) => b - a);
    console.log(arr.join(""));
  } else {
    console.log(-1);
  }
}
