//https://school.programmers.co.kr/learn/courses/30/lessons/42840

//완전탐색 유형 - 할 수 있는 모든 경우를 탐색해보는 것 (무식하게 경우를 다 세면 된다)
function solution(answers) {
  //1,2,3번 학생이 맞춘 문제 개수를 세기 위해 길이가 3인 배열 0으로 초기화
  const correct = Array(3).fill(0);

  //1,2,3번 학생의 찍기패턴 각각 배열에 담기
  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  //answer의 길이, 즉 문제 개수가 찍기 패턴의 길이보다 넘어갈 수 있기 때문에 mod 연산자 이용해서 순회
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === first[i % 5]) correct[0]++;
    if (answers[i] === second[i % 8]) correct[1]++;
    if (answers[i] === third[i % 10]) correct[2]++;
  }

  //세 학생 중 가장 많이 맞춘 학생의 문제 개수를 담아주고
  const max = Math.max(...correct);
  //가장 많은 문제를 맞춘 학생이 여러명일 수 있으니 return할 배열을 만든다
  const answer = [];

  for (let i = 0; i < correct.length; i++) {
    //max 값과 똑같다면 가장 많은 문제를 맞춘 학생 중 한 명이므로 인덱스를 answer에 담아준다
    //문제에서는 학생을 1,2,3으로 명시하고 있으므로 인덱스에 1씩 더해줘야한다
    if (correct[i] === max) answer.push(i + 1);
  }
  return answer;
}
