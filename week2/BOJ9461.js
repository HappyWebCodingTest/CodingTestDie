// 파도반 수열 문제
// dp 문제이지만 점화식을 유추할 수 있으면 쉽게 풀 수 있는데 처음에 그림을 봐도 이해를 못했었다.
// 그래서 그냥 주어진 예시로 보고 풀었는데 초기값은 P(0) = P(1) = P(2) = 1이고
// P(N) = P(N-2) + P(N-3)을 유추하면 그 이후는 쉽게 풀었다!
// 점화식을 빠르게 찾아내는게 중요한거 같다

let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .split("\n")
  .map((element) => Number(element)); //string이 아닌 바로 number로 변환

input.shift();
const MAX = Math.max(...input);
const sequence = [];
//초기값을 미리 넣어준다
sequence[0] = 1;
sequence[1] = 1;
sequence[2] = 1;

//input배열 중 최대값으로 설정을 해야 앞부분 배열부터 채울 수 있다.
//만약 6먼저 한다면 7~12까지의 값은 비어있기 때문에 계산을 할 수 없기 때문에
for (let i = 3; i <= MAX; i++) {
  sequence[i] = sequence[i - 3] + sequence[i - 2];
}

input.forEach((i) => console.log(sequence[i - 1]));
