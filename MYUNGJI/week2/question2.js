//[프로그래머스 레벨0]
//정수 n이 매개변수로 주어질 때, n의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.
//제한사항
// 1 ≤ n ≤ 10,000

function solution(n) {
  let answer = [];

  for (d = 1; d <= n; d++)
    if (n % d === 0) {
      answer.push(d);
    }
  return answer;
}

// 약수 = divisor
//n을 d로 나눈게 0이되면 d는 n의 약수가 되기 때문에 반복문 안에 넣어서 d가 0이되는 애들을 구한 다음 배열 안에 넣어주었다.
