//https://www.acmicpc.net/problem/17478
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "week3/BOJ17478.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

// let str = "";
// console.log("어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.");
// function chatBot(index) {
//   const underBar = "_".repeat(4 * index);
//   str += `${underBar}"재귀함수가 뭔가요?"
// `;
//   if (index < input) {
//     str += `${underBar}"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.
// ${underBar}마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.
// ${underBar}그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."
// `;
//     chatBot(index + 1);
//   } else {
//     str += `${underBar}"재귀함수는 자기 자신을 호출하는 함수라네"
// `;
//   }
//   str += `${underBar}라고 답변하였지.
// `;
// }

// chatBot(0);
// console.log(str.trim());

// 문자열 안에서 줄바꿈 하고 싶으면 \n

//첨에 이렇게 풀었는데 무한 반복이 되엇서요,, -> if문 안에 조건을 잘못 넣어줬었네요 (index === input) 이걸로 넣어서 무한반복이 되었던거임
// console.log("어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.");

// function chatBot(index) {
//   const underBar = "_".repeat(4 * index);
//   console.log(underBar + '"재귀함수가 뭔가요?"');

//   if (index < input) {
//     console.log(
//       underBar +
//         '"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.'
//     );
//     console.log(
//       underBar +
//         "마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지."
//     );
//     console.log(
//       underBar +
//         '그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."'
//     );
//     chatBot(index + 1);
//   } else {
//     console.log(underBar + '"재귀함수는 자기 자신을 호출하는 함수라네"');
//     console.log(underBar + "라고 답변하였지.");
//     return;
//   }

//   console.log(underBar + "라고 답변하였지.");
// chatBot(0);
// }

/*
배운점 
1. repeat() : 문자열 더하기를 해주는 함수! "a" * 4는 문법적으로 틀린데, 이와 같은 역할을 해준다!
2. 긴 줄의 문자열을 출력해야할 때 -> 백틱을 사용하면 쉽게 출력할 수 있다!
- 그런데 얘는 들여쓰기 같은 거에 민감해서 들여쓰기 모두 vsc에서 똑같이 반영해줘야함. 
- 변수를 안에 쓰고 싶을 때는 ${변수이름}으로 써주면 된다!
3. 뭔가 내가 재귀에 겁을 먹고 있는 듯해,,,종료 조건에서 return만 잘해주면 되는 반복문이라고 생각하기!
*/
