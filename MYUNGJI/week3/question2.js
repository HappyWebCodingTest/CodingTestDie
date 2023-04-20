//완전 탐색
// 인프런
//뒤집은 소수

// N개의 자연수가 입력되면 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력하 는 프로그램을 작성하세요. 예를 들어 32를 뒤집으면 23이고, 23은 소수이다. 그러면 23을 출 력한다. 단 910를 뒤집으면 19로 숫자화 해야 한다. 첫 자리부터의 연속된 0은 무시한다.
// ▣ 입력설명
// 첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다. 각 자연수의 크기는 100,000를 넘지 않는다.
// ▣ 출력설명
// 첫 줄에 뒤집은 소수를 출력합니다. 출력순서는 입력된 순서대로 출력합니다.

function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
function solution(arr) {
  let answer = [];
  for (let x of arr) {
    let res = Number(x.toString().split("").reverse().join(""));
    if (isPrime(res)) answer.push(res);
    ㄴ;
  }
  return answer;
}

// let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
// console.log(solution(arr)); //[ 23, 2, 73, 2, 3 ]

// parseInt()
// parseInt(string, radix);
// 이것은 string을 정수로 변환한 값을 리턴한다. 만약, string의 첫 글자를 정수로 변경할 수 없으면 NaN(Not a Number) 값을 리턴함

//Math.Sqrt()
//Math.Sqrt(double d);
// java.lang.Math클래스의 sqrt() 메서드임
// double타입의 인수를 전달하면 인수에 대한 double타입의 제곱근 값을 리턴함

//x.toString().split("").reverse().join("") => 숫자 뒤집기
