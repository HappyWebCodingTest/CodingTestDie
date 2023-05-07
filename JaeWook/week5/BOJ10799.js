//스택을 활용해서 문제 해결
//3가지의 경우로 나누어 볼 수 있다.
// 1) "("를 만났을 때에는 쇠막대기의 왼쪽 끝이기 때문에 stack에 저장
// 2) ")"를 만났는데 stack에 "("가 들어있는 경우
//    레이저를 만났기 때문에 stack에서 레이저 부분을 pop해주고 남은 "("의 갯수를 세준다.
// 3) ")"를 만났는데 stack에 ")"가 들어있는 경우
//    ")"와 ")" 두개가 만났기 때문에 하나의 막대가 끝이 났다. 막대가 끝이 났다는 건 +1를 해줘야함 (여기 이유 찾는게 어려웠다)
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("");

let stack = [];
let answer = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] === "(") {
    stack.push(input[i]);
  } else {
    if (input[i - 1] === "(") {
      stack.pop();
      answer += stack.length;
    } else {
      stack.pop();
      answer++;
    }
  }
}

console.log(answer);
