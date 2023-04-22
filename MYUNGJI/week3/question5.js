//프로그래머스 레벨2
//정렬
//0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.
// 예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.
// 0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.

//처음 풀이
function solution(numbers) {
  let answer = numbers
    .map((num) => num.toString())
    .sort((a, b) => b + a - (a + b))
    .join("");

  return answer;
}

// 제출하니까 결과 값 중 한 개가 틀리게 나와서 왜 틀렸는지 이해하는데 오래 걸렸다.
// 마지막은 answer로 리턴하는게 아니라 0만 있는 경우, 답을 0으로 출력하고 아니면 answer로 출력해야함다!

function solution(numbers) {
  let answer = numbers
    .map((num) => num.toString())
    .sort((a, b) => b + a - (a + b))
    .join("");

  return answer[0] === "0" ? "0" : answer;
}

//풀이
// 1) 숫자를 string로 바꾼다.
// 2) sort 메서드를 통해 a+b 와 b+a를 비교한다. (a=79 b=42 라면 a+b=7942 b+a=4279가 되기 때문에 둘 다 비교해야한다.)
// 3) 그리고 두 개를 비교해 더 큰 숫자가 앞으로 오도록 정렬한다.
// 4) join 메서드로 배열의 요소들을 문자열로 바꾼다.
// 5) answer로 리턴하는게 아니라 0만 있는 경우, 답을 0으로 출력하고 아니면 answer로 출력
