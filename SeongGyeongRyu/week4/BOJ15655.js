// 이 유형에 아예 감이 오지 않아서 이 문제는 답을 보고 유형을 공부한 후, 나머지 N과 M 약 10문제를 풀기로 했습니다!

const fs = require("fs");
let input = fs
  .readFileSync("./BOJ15655.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((n) => +n));

//[4,2],[9,8,7,1]에 대해서 이렇게도 구조분해 할당이 가능하구나! 근데 더 헷갈리는 듯
// let [[N, M], ...arr] = input;
// arr = arr[0].sort((a, b) => a - b);

const [N, M] = input[0];
const arr = input[1].sort((a, b) => a - b);

const solve = (N, M, arr) => {
  let permutation = [];

  const chosen = Array(N).fill(false);
  const output = [];

  const recursion = (prev) => {
    //M만큼 들어가면 출력을 위해 " "로 묶어준다.
    if (permutation.length === M) {
      output.push(permutation.join(" "));
    } else {
      chosen.forEach((bool, i) => {
        if (!bool && i > prev) {
          chosen[i] = true;
          permutation.push(arr[i]);
          recursion(i);
          chosen[i] = false;
          permutation.pop();
        }
      });
    }
  };

// recursion(-1) [t,f,f,f]  
// recursion(0) 
// - [t,t,f,f]
// 1 7 
//  - [t,f,t,f]
// 1 8 
// - [t,f,f,t]
// 1 9
// - [f,f,f,f]
// - [f,t,f,f] 


  recursion(-1);
  console.log(output.join("\n"));
};
solve(N, M, arr);
