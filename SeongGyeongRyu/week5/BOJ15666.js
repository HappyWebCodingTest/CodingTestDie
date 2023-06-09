const fs = require("fs");
let input = fs
  .readFileSync("week5/BOJ15666.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((n) => +n));

const [N, M] = input[0];
const arr = input[1].sort((a, b) => a - b);

const solution = (M, arr) => {
  let permutation = [];
  let output = [];

  const recursion = (prev) => {
    if (permutation.length === M) {
      output.push(permutation.join(" "));
    } else {
      //같은 값을 두 번 반복한 결과도 나올 수 있기 때문에 chosen 배열은 필요 X
      arr.forEach((_, idx) => {
        if (idx >= prev) {
          permutation.push(arr[idx]);
          recursion(idx);
          permutation.pop();
        }
      });
    }
  };

  recursion(0); // 조건이 idx >= prev 라서 -1이 아니라 0부터 시작할 수 있다.
  const newOutput = new Set(output); // 중복을 없애기 위해서 배열-set-배열로 처리

  console.log([...newOutput].join("\n"));
};

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

solution(M, arr);
