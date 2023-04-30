//셀프 넘버 구하기
//셀프 넘버를 구하기 위해서 셀프 넘버가 아닌 수를 구하는 함수를 작성했다.
//true값을 가지고 있는 배열을 만들고 순회를 하며 셀프 넘버가 아닌 숫자의 배열 인덱스를 false로 바꿔주었다.
//false로 바뀐 배열의 인덱스는 셀프넘버가 아니기 때문에 true인 배열 인덱스를 출력해줬다.

//셀프넘버를 어떻게 구하지? 라는 생각만 하느라 처음에 되게 오래걸렸는데
//그럼? 셀프넘버가 아닌 수를 구하고 빼주면 되자나? 라는 생각을 하는 순간 금방 풀었다.
function notSelfNum(num) {
  let sum = num;
  while (num > 0) {
    sum += num % 10;
    num = parseInt(num / 10);
  }

  return sum;
}

const selfNum = Array(10000).fill(true);

for (let i = 0; i < 10000; i++) {
  selfNum[notSelfNum(i)] = false;

  if (selfNum[i]) {
    console.log(i);
  }
}
