// 그리디
// 프로그래머스 2
// 큰 수 만들기

function solution(number, k) {
  const stack = []; //스택에 배열 저장
  let removed = 0;

  for (let i = 0; i < number.length; i++) {
    const current = number[i];

    while (
      stack.length > 0 &&
      current > stack[stack.length - 1] &&
      removed < k
    ) {
      stack.pop();
      removed++; // 스택의 맨 위 숫자와 현재 숫자를 비교하여, 스택의 숫자가 작을 경우 해당 숫자를 스택에서 제거하고 제거된 숫자의 개수를 증가함
    }

    stack.push(current);
  } // 제거해야 할 숫자의 개수가 'k'와 같아지거나 스택이 비어지면 숫자를 스택에 추가
  while (removed < k) {
    stack.pop();
    removed++;
  } // 다 돌고도 숫자가 남으면 남은 뒤에서 부터 숫자 제거

  return stack.join(""); // 숫자를 문자열로 다시 반환함
}

//더 간단한 풀이
//배열에 넣으면서 새로운 수를 만나면 앞의 수와 비교해서 더 크면 이전 수를 삭제하고 현재 수를 넣어주는 풀이
function solution(number, k) {
  const arr = [];
  for (let i = 0; i < number.length; i += 1) {
    while (arr.length > 0 && arr[arr.length - 1] < number[i] && k > 0) {
      k -= 1;
      arr.pop();
    }
    arr.push(number[i]);
  }
  arr.splice(number.length - k, k);
  return arr.join("");
}
