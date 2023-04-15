//https://school.programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
  const correct = Array(3).fill(0);

  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === first[i % 5]) correct[0]++;
    if (answers[i] === second[i % 8]) correct[1]++;
    if (answers[i] === third[i % 10]) correct[2]++;
  }

  const max = Math.max(...correct);
  const answer = [];

  for (let i = 0; i < correct.length; i++) {
    if (correct[i] === max) answer.push(i + 1);
  }
  return answer;
}
