// 프로그래머스 레벨2
// 기능 개발
// 스택/큐

function solution(progresses, speeds) {
  const answer = [];
  const days = [];

  for (let i = 0; i < progresses.length; i++) {
    const progress = progresses[i];
    const speed = speeds[i];
    const day = Math.ceil((100 - progress) / speed);
    days.push(day);
  }
  let count = 1;
  let prevDay = days[0];

  for (let i = 1; i < days.length; i++) {
    if (days[i] <= prevDay) {
      count++;
    } else {
      answer.push(count);
      count = 1;
      prevDay = days[i];
    }
  }

  answer.push(count);

  return answer;
}
