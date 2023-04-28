// 프로그래머스 레벨 0

// 머쓱이는 행운의 숫자 7을 가장 좋아합니다. 정수 배열 array가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.
//제한사항
// 1 ≤ array의 길이 ≤ 100
// 0 ≤ array의 원소 ≤ 100,000

// 처음에 생각한 답
function solution(array) {
  let answer = 0;
  answer = array.filter((array) => array === 7);
  return answer.length;
}

// 문제점 => 7의 자리별로 계산하지 못함, 계산 값 틀림

// 고친 답
function solution(array) {
  let answer = 0;
  let string = array.toString();

  for (i = 0; i < string.length; i++)
    if (string[i] === "7") {
      answer++;
    }
  return answer;
}

//풀이)
//배열을 아예 문자열로 바꿔서 자리 값을 계산해주었다. 7일 일치할때마다 반복문(+ if문)에서 answer값을 +1씩 해주었다. => 개수 구하기 완료.

// 다른 사람 풀이 참고

function solution(array) {
  return array
    .join()
    .split("")
    .filter((el) => {
      return el === "7";
    }).length;
}
// filter를 이용하고 싶으면 이렇게 사용해야함!
