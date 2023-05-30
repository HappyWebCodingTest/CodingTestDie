// 프로그래머스 레벨2
// 기능 개발
// 스택/큐

function solution(progresses, speeds) {
  const answer = [];
  const days = [];
// 기능 개발에 걸리는 시간 계산
  for (let i = 0; i < progresses.length; i++) {
    const progress = progresses[i];
    const speed = speeds[i];
    const day = Math.ceil((100 - progress) / speed);
    days.push(day);
  }
  let count = 1; //기능 개수 카운트
  let prevDay = days[0]; // 이전기능 개발 시간

  for (let i = 1; i < days.length; i++) {
    if (days[i] <= prevDay) { // 뒤의 개발 기능이 더 빠르게 될 경우 계산
      count++; // 기능 개수를 카운트 한다
    } else {
      answer.push(count); // 이전 기능의 개발이 완료되면 배포, 배포되는 기능의 개수를 answer에 추가
      count = 1; // 카운트 초기화
      prevDay = days[i];
    }
  }

  answer.push(count); // 마지막 배포 카운팅 푸시

  return answer;
}
