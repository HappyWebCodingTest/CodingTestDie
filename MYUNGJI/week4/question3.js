// 프로그래머스 레벨 2
// n^2 배열 자르기
// 정수 n, left, right가 주어집니다. 다음 과정을 거쳐서 1차원 배열을 만들고자 합니다.

// n행 n열 크기의 비어있는 2차원 배열을 만듭니다.
// i = 1, 2, 3, ..., n에 대해서, 다음 과정을 반복합니다.
// 1행 1열부터 i행 i열까지의 영역 내의 모든 빈 칸을 숫자 i로 채웁니다.
// 1행, 2행, ..., n행을 잘라내어 모두 이어붙인 새로운 1차원 배열을 만듭니다.
// 새로운 1차원 배열을 arr이라 할 때, arr[left], arr[left+1], ..., arr[right]만 남기고 나머지는 지웁니다.
// 정수 n, left, right가 매개변수로 주어집니다. 주어진 과정대로 만들어진 1차원 배열을 return 하도록 solution 함수를 완성해주세요.

function solution(n, left, right) {
  let answer = [];
  for (let i = left; i <= right; i++) {
    let x = i % n;
    let y = parseInt(i / n);
    answer.push(Math.max(x, y) + 1);
  }
  return answer;
}

// 갈아를 right까지 한 것 => 시간 초과를 막기위해
// 특정한 좌표에 있는 숫자는 x좌표 또는 y좌표중 큰 값+1

// 위에 코드 더 간단하게 만든 다른 코드

function solution(n, left, right) {
  var answer = [];

  for (let i = left; i <= right; i++) {
    answer.push(Math.max(i % n, parseInt(i / n)) + 1);
  }

  return answer;
}

// 굳이 따로 선언하지 않고 바로 정답에 push! 도 가능하다 !
