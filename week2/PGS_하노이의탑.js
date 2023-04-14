//https://school.programmers.co.kr/learn/courses/30/lessons/12946

function solution(n) {
  let answer = [];

  const hanoi = (n, start, mid, end) => {
    if (n === 1) answer.push([start, end]);
    else {
      hanoi(n - 1, start, end, mid); //A에서 B로 이동
      answer.push([start, end]); //제일 큰 판 C로 이동
      hanoi(n - 1, mid, start, end); //나머지 모두 C로 이동
    }
  };

  hanoi(n, 1, 2, 3);
  return answer;
}
