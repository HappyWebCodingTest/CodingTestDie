// 프로그래머스
// 레벨 3
// 입국 심사
// 이분탐색

function solution(n, times) {
  times.sort((a, b) => a - b);
  let lt = 0;
  let rt = n * times[times.length - 1]; //1.times가 1인당 걸리는 시간이기때문에 n * times 해줘야함
  let answer;

  while (lt <= rt) { // 5. 아래를 반복해서 오른쪽 값이 왼쪽 값보다 같거나 작아질떄까지 반복함
    let mid = Math.floor((lt + rt) / 2);
    let max = 0;

    for (let e of times) {
      max += Math.floor(mid / e); // 2. mid 시간 내에 심사할 수 있는 최대 값을 구함
    }
    if (max >= n) {
      // 3. 최대 값이 사람 수보다 크거나 같으면 오른쪽 값을 하나 줄여서 다시 mid 값 탐색
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1; // 4. 최대 값이 사람수보다 작아지면 심사할 수 없으므로 왼쪽 값을 하나 증가 시킴
    }
  }
  return answer;
}
