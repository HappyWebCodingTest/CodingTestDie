//https://school.programmers.co.kr/learn/courses/30/lessons/42587
//BOJ1966 https://www.acmicpc.net/problem/1966 과 동일한 문제

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    //노드가 하나라도 있을 때
    if (this.head) {
      this.tail.next = newNode;
      this.tail = newNode;
    } //노드가 하나도 없을 때 (큐가 비어있을 때)
    else {
      this.head = this.tail = newNode;
    }
    this.size++;
  }

  dequeue() {
    const val = this.head.value;
    this.head = this.head.next;
    this.size--;
    return val;
  }

  peek() {
    return this.head.value;
  }
}

//1. 테스트 케이스 1,5,14,15만 통과
//3 2 4 1  에서 1을 출력하려는 경우와 같은 처리가 되지 않아서 그런 것 같다.
//3 2 4 1 -> 4 1 3 2 -> 1 3 2 -> 3 2 1

/*
function Solution(priorities, location) {
  let max = Math.max(...priorities);
  let result = 0;
  let cnt = 0;
  let queue = new Queue();

  for (let i = 0; i < priorities.length; i++) {
    queue.enqueue(priorities[i]);
  }

  while (queue.head.value !== max) {
    const val = queue.dequeue();
    queue.enqueue(val);
    cnt++;
  }

  if (location + 1 - cnt > 0) {
    result = location + 1 - cnt;
  } else {
    result = location + 1 - cnt + priorities.length;
  }

  return result;
}
*/

function solution(priorities, location) {
  let queue = new Queue();

  //1. 우선순위랑 인덱스 번호를 묶어서 queue에 넣는다 (이렇게 묶어서 넣는 방법을 잘 기억해두면 정보를 한 번에 잘 관리할 수 있다!)
  for (let i = 0; i < priorities.length; i++) {
    queue.enqueue([priorities[i], i]);
  }

  //2. 우선순위를 내림차순으로 정리한다
  priorities.sort((a, b) => b - a);
  //count가 인덱스로 사용될 것
  let count = 0;
  while (queue.size > 0) {
    //큐의 가장 앞에 있는 값 (정렬 전 priorities에서 가장 앞에 있는 값) 을 꺼내고
    const currentValue = queue.peek();
    //만약 그 값이 현재 기준에서 가장 우선순위가 큰 값보다 작다면, 즉 뒤에 더 우선순위가 높은 값이 있다면 뒤로 보낸다
    if (currentValue[0] < priorities[count]) {
      queue.enqueue(queue.dequeue());
    } //뒤에 남은 값 중 해당 수가 가장 크다면 큐에서 빼고 count를 더해준다. (그 다음 큰 값을 기준으로 탐색할 수 있게)
    else {
      const value = queue.dequeue();
      count++;
      //만약 찾은 수의 인덱스와 location이 같다면 그 자리에서 count를 리턴해주면 location에 해당하는 수가 출력되는 순서를 구할 수 있다.
      if (value[1] === location) return count;
    }
  }

  //이 경우에는 queue에서 모든 값이 다 dequeue 되었을 때, 즉 찾으려는 수가 맨마지막에 출력이 될 경우를 의미한다.
  return count;
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));

//어려웠던 거 : 정렬된 애들 중에서 우리 애가 누군지 찾기
