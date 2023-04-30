// 프로그래머스 레벨2
// 올바른 괄호
//

//처음 풀이
function solution(s) {
  let stackCount = 0;

  for (i = 0; i < s.length; i++) {
    stackCount += s[i] === "(" ? +1 : -1;
    if (stackCount < 0) return false;
  }

  if (stackCount === 0) return true;
  else return false;
}
// 효율성 테스트 실패 => 시간 복잡도를 줄어야함!!
function solution(s) {
  let stackCount = 0;

  for (let i = 0; i < s.length; i++) {
    stackCount += s[i] === "(" ? +1 : -1;
    if (stackCount < 0) return false;
  }
  return stackCount === 0 ? true : false;
}

// 조건문도 삼항 연산자로 바꾸고  let i=0 빼먹을걸 넣어줬다 이걸 넣어야하는 이유가 변수 선언문이 한번만 실행되기에! 중복으로 값이 더해지는 걸 막아준다!
