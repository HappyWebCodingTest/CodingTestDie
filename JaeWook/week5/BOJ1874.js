// 수열을 만들기 위해서 stack에 들어갔던 숫자만 가능한다는 걸 아는게 중요하다!
// 즉 stack를 조작해야한다.
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const iter = input.shift();
let ans = [];
let stack = [];
let stackNum = 1;

for (let i = 0; i < iter; i++) {
  let num = input[i];
  while (stackNum <= num) {
    stack.push(stackNum);
    stackNum++;
    ans.push("+");
  }
  let stackPop = stack.pop();
  ans.push("-");
  if (stackPop !== num) {
    ans = ["NO"];
    break;
  }
}

console.log(ans.join("\n"));
