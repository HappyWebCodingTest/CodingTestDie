// -1+1+1+1+1 = 3
// +1-1+1+1+1 = 3
// +1+1-1+1+1 = 3
// +1+1+1-1+1 = 3
// +1+1+1+1-1 = 3

function solution(numbers, target) {
  let answer = 0;

  const dfs = (current, idx) => {
    //끝까지 도달하면
    if (idx === numbers.length) {
      // target(3)이랑 current가 같은지 비교해서 같으면 answer +=1
      if (target === current) {
        answer += 1;
      }
      //같지 않다면 값 버림
      return;
    }
    //더하거나 빼서 target을 만들어야하니까 dfs를 2개 돌린다!
    dfs(current + numbers[idx], idx + 1);
    dfs(current - numbers[idx], idx + 1);
  };

  dfs(0, 0);

  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
