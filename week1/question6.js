//프로그래머스 레벨 0

//문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.
// 1 ≤ my_str의 길이 ≤ 100
// 1 ≤ n ≤ my_str의 길이
// my_str은 알파벳 소문자, 대문자, 숫자로 이루어져 있습니다.

//처음 푼 풀이
function solution(my_str, n) {
  let answer = [];
  for (i = 0; i < my_str.length / n; i++) answer.push(my_str.slice(i, i + n));
  return answer;
}

//문제점 : 원하는 값으로 잘리지 않음

// 테스트 1
// 입력값 〉	"abc1Addfggg4556b", 6
// 기댓값 〉	["abc1Ad", "dfggg4", "556b"]
// 실행 결과 〉	실행한 결괏값 ["abc1Ad","bc1Add","c1Addf"]이 기댓값 ["abc1Ad","dfggg4","556b"]과 다릅니다.
// 테스트 2
// 입력값 〉	"abcdef123", 3
// 기댓값 〉	["abc", "def", "123"]
// 실행 결과 〉	실행한 결괏값 ["abc","bcd","cde"]이 기댓값 ["abc","def","123"]과 다릅니다.

//옳은 풀이
function solution(my_str, n) {
  const answer = [];
  for (i = 0; i < my_str.length; i += n) answer.push(my_str.slice(i, i + n));
  return answer;
}

// 포인트
// - 한개씩 증가시키는 것이 아닌 n씩 증가시켜야한다 => 왜냐면 n만큼 잘라야하기 때문에
// slice()메소드를 사용하여 i부터 i+n까지 잘라 answer배열에 푸시 해주어야한다.
// 이것을 my_str의 길이 만큼 반복해야한다.
