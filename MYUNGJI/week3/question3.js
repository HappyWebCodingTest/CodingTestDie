// 해시
// Map 사용 // 이것은 자바의 HashMap와 같은 개념
// 추억 점수

function solution(name, yearning, photo) {
  const answer = [];
  const map = new Map();

  name.forEach((item, index) => {
    map.set(item, yearning[index]);
  });

  for (let i = 0; i < photo.length; i++) {
    let count = 0;
    for (let j = 0; j < photo[i].length; j++) {
      const score = map.get(photo[i][j]);
      if (!score) continue;
      count += score;
    }
    answer.push(count);
  }

  return answer;
}

//반복문을 사용하는 것까지는 생각했는데 map함수는 사용하지 못해서 한시간정도 고민하다 정답을 찾와봤다!(어려어잉..)
//Map 함수는 hash자료 구조인데 1) 우선 이것을 사용해서 이름을 key로, 점수를 value로 값을 초기화 한다.
//2) 그리고 photo에 대해 반복문을 돌리는데
//3) 첫번째로는 점수의 합을 0으로 초기화 해준다.(이유는 각 사진마다 점수 합산이 끝난 뒤 다음 사진을 계산할 때 0으로 초기화시켜줘야 하기 때문)
//4) 사진 속 인물에 대한 반복문(안에 있는 반복문)이 실행될 때에는 해당 이름을 통해서 hash에 key로 접근해서 value(점수)를 가져와서 score 변수에 담아준다.
//5) 인물마다 점수가 없는 경우도 있어서 score 변수의 값이 없으면 continue를 통해서 다음 요소로 건너뛰게 해주고 아니라면 count 변수에 socre를 더해지도록 한다.
//6) 인물 속 점수 합산이 끝나면 answer 변수에 count를 push해준다.
