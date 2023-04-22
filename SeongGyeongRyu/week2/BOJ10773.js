//vsc에서 출력이 제대로 되는데 백준에 제출을 하면 틀렸다고 해서 거의 1시간을 헤맸습니다,,
//해결방법 : input 받는 부분에서 trim 적어주기 (입력을 받을 때 공백이 들어갈 수도 있으니까)
//궁금증 : 근데 어차피 뒤에서 map(v => +v)로 숫자로 바꿔주는데 trim이 없는게 이렇게 입출력에서 크리티컬한 문제가 되나...?
//2점

let fs = require("fs");
let input = fs
  .readFileSync("BOJ10773.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((v) => +v);

let stack = [];
let result = 0;

for (let i = 0; i < input.length; i++) {
  //0이면 최근에 쓴 문자를 지우니까 0일 때는 pop, 0이 아닐 때는 Push
  if (input[i]) stack.push(input[i]);
  else stack.pop();
}

if (stack.length) {
  //reduce 함수는 길이가 0인 배열에서 사용할 수 없기 때문에 stack의 길이가 양수일 때만 reduce 함수를 실행
  result = stack.reduce((sum, value) => (sum += value));
}

console.log(result);

console.log([].reduce((sum, cur) => sum + cur));
