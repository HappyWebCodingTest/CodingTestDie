const fs = require("fs");
let input = fs
  .readFileSync("week5/BOJ2156.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

const [N, ...arr] = input;

//체크해야하는 거
//1. 연속으로 3개가 chosen 되지 않게
//2. 더하거나, 안더하거나

// 1. dfs로 푼 풀이 - 시간초과, 메모리 초과
// dfs - 모든 노드를 방문하려는 경우 사용한다.
/*
let sum = [];

const dfs = (current, idx, cnt) => {
  if (idx === arr.length) {
    if (Math.max(...sum) < current) sum.push(current);
    return;
  } else {
    if (cnt === 2) {
      dfs(current, idx + 1, 0);
    } else {
      dfs(current + arr[idx], idx + 1, cnt + 1);
      dfs(current, idx + 1, cnt);
    }
  }
};

dfs(0, 0, 0);

console.log(sum[0]);
*/

//2. dp로 푼 풀이
/*
1. dp[n-3] + (n-1),n번째 포도주 
2. dp[n-2] + n번째 포도주
3. dp[n-1]번째 포도주 (dp[n-2]+dp[n-1]과 동일)
*/

//n까지 더한 값이 n+1에 들어가니까 받은 배열보다 하나 더 크게 배열을 선언한다.
const dp = Array(N + 1).fill(0);

dp[1] = arr[0];
dp[2] = arr[1] + arr[0];

for (let i = 3; i <= N; i++) {
  dp[i] = Math.max(
    dp[i - 1],
    dp[i - 3] + arr[i - 1] + arr[i - 2],
    dp[i - 2] + arr[i - 1]
  );
}

console.log(dp[N]);
