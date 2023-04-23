//프로그래머스 레벨2
//뒤에 있는 큰 수 찾기

// 정수로 이루어진 배열 numbers가 있습니다. 배열 의 각 원소들에 대해 자신보다 뒤에 있는 숫자 중에서 자신보다 크면서 가장 가까이 있는 수를 뒷 큰수라고 합니다.
// 정수 배열 numbers가 매개변수로 주어질 때, 모든 원소에 대한 뒷 큰수들을 차례로 담은 배열을 return 하도록 solution 함수를 완성해주세요. 단, 뒷 큰수가 존재하지 않는 원소는 -1을 담습니다.
//4 ≤ numbers의 길이 ≤ 1,000,000
// 1 ≤ numbers[i] ≤ 1,000,000

//처음
function solution(numbers) {
  var answer = [];

  for (var i = 0; i < numbers.length; i++) {
    var num = -1;
    for (var k = i + 1; k < numbers.length; k++) {
      if (numbers[i] < numbers[k]) {
        num = numbers[k];
        break;
      }
    }

    answer.push(num);
  }
  return answer;
}

//반복문을 사용해서 시도했는데 결과 중 몇개가 실패로 나와 다른 코드를 시도해야했다.
//이것저것 고민헀는데 알고보니 stack 을 사용해야했다!

function solution(numbers) {
  const answer = Array(numbers.length).fill(-1);
  const stack = [];

  for (let i = 0; i < numbers.length; i++) {
    while (stack.length && numbers[stack.at(-1)] < numbers[i]) {
      answer[stack.pop()] = numbers[i];
    }
    stack.push(i);
  }
  return answer;
}

//stack 사용
//fill() 메서드는 배열의 시작 인덱스부터 끝 인덱스의 이전까지 정적인 값 하나로 채웁니다.

//풀이
// 1)아직 값이 정해지지 않는 인덱스를 담아낼 stack생성한다.
// 2)값이 정해지지 않는 것을 고려해 요소가 모두 -1 인 값을 가진 배열 생성한다.
// 3)만일 스택에 값이 있고, stack 맨 앞 값 < numbers[i] 라면 그 stack index는 numbers[i] 가 가장 가까운 값이라고 정한다.
// 4)그래서 스택에 있는 인덱스를 pop해주면서 그 값에는 numbers[i]의 값을 할당한다.
// 5)마지막에는 i인덱스를 스택에 푸쉬한다.
