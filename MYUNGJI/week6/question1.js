// 프로그래머스 레벨2
//큐
//프로세스

function solution(priorities, location) {
  const queue = priorities.map((priority, index) => [priority, index]);
  let order = 0;

  while (queue.length > 0) {
    const current = queue.shift(); // 대기열의 가장 앞에 있는 프로세스를 꺼내기
    // 우선순위가 더 높은 프로세스가 있으면 다시 큐에 넣기
    if (queue.some((process) => process[0] > current[0])) {
      queue.push(current);
    } else {
      order += 1;
      // 현재 프로세스가 찾던 프로세스이면 실행 순서를 반환
      if (current[1] === location) {
        return order;
      }
    }
  }
}

//큐 => 먼저 나온 애가 먼저 나온다!=> 따로 자세히 정리하기!
