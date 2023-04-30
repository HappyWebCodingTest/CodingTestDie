const fs = require("fs");
let input = fs
  .readFileSync("week4/BOJ15656.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((n) => +n));

const [N, M] = input[0];
const arr = input[1].sort((a, b) => a - b);

const solve = (N, M, arr) => {
  let permutation = []; //방문한 값을 담을 배열

  const output = []; //정답을 담을 배열

  const recursion = () => {
    //M과 같아지면 수열에 숫자를 그만 추가하고 답에 넣어야함
    if (permutation.length === M) {
      //[1,3]을 "1 3"으로 정답 출력 형식에 맞게 바꿔줌
      output.push(permutation.join(" "));
    } else {
      arr.forEach((_, i) => {
        //arr를 처음부터 끝까지 arr.length만큼 재귀로 순회
        permutation.push(arr[i]);
        recursion(); // 1 - 1 pop 7 pop 8 pop 9 pop
        permutation.pop();
      });
    }
  };

  recursion();
  //처음에 답을 출력할 때
  //output.forEach(el=>console.log(el))로 하니까 시간초과가 남
  console.log(output.join("\n"));
};
solve(N, M, arr);
