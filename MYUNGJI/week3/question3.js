//[프로그래머스 레벨1]
// 해시
// Map 사용 // 이것은 자바의 HashMap와 같은 개념
// 추억 점수

// 사진들을 보며 추억에 젖어 있던 루는 사진별로 추억 점수를 매길려고 합니다. 사진 속에 나오는 인물의 그리움 점수를 모두 합산한 값이 해당 사진의 추억 점수가 됩니다. 예를 들어 사진 속 인물의 이름이 ["may", "kein", "kain"]이고 각 인물의 그리움 점수가 [5점, 10점, 1점]일 때 해당 사진의 추억 점수는 16(5 + 10 + 1)점이 됩니다. 다른 사진 속 인물의 이름이 ["kali", "mari", "don", "tony"]이고 ["kali", "mari", "don"]의 그리움 점수가 각각 [11점, 1점, 55점]]이고, "tony"는 그리움 점수가 없을 때, 이 사진의 추억 점수는 3명의 그리움 점수를 합한 67(11 + 1 + 55)점입니다.

// 그리워하는 사람의 이름을 담은 문자열 배열 name, 각 사람별 그리움 점수를 담은 정수 배열 yearning, 각 사진에 찍힌 인물의 이름을 담은 이차원 문자열 배열 photo가 매개변수로 주어질 때, 사진들의 추억 점수를 photo에 주어진 순서대로 배열에 담아 return하는 solution 함수를 완성해주세요.

// 제한사항
// 3 ≤ name의 길이 = yearning의 길이≤ 100
// 3 ≤ name의 원소의 길이 ≤ 7
// name의 원소들은 알파벳 소문자로만 이루어져 있습니다.
// name에는 중복된 값이 들어가지 않습니다.
// 1 ≤ yearning[i] ≤ 100
// yearning[i]는 i번째 사람의 그리움 점수입니다.
// 3 ≤ photo의 길이 ≤ 100
// 1 ≤ photo[i]의 길이 ≤ 100
// 3 ≤ photo[i]의 원소(문자열)의 길이 ≤ 7
// photo[i]의 원소들은 알파벳 소문자로만 이루어져 있습니다.
// photo[i]의 원소들은 중복된 값이 들어가지 않습니다.

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

//반복문을 사용하는 것까지는 생각했는데 map함수는 사용하지 못해서 한시간정도 고민하다 정답을 찾와봤다!
//Map 함수는 hash자료 구조인데 1) 우선 이것을 사용해서 이름을 key로, 점수를 value로 값을 초기화 한다.
//2) 그리고 photo에 대해 반복문을 돌리는데
//3) 첫번째로는 점수의 합을 0으로 초기화 해준다.(이유는 각 사진마다 점수 합산이 끝난 뒤 다음 사진을 계산할 때 0으로 초기화시켜줘야 하기 때문)
//4) 사진 속 인물에 대한 반복문(안에 있는 반복문)이 실행될 때에는 해당 이름을 통해서 hash에 key로 접근해서 value(점수)를 가져와서 score 변수에 담아준다.
//5) 인물마다 점수가 없는 경우도 있어서 score 변수의 값이 없으면 continue를 통해서 다음 요소로 건너뛰게 해주고 아니라면 count 변수에 socre를 더해지도록 한다.
//6) 인물 속 점수 합산이 끝나면 answer 변수에 count를 push해준다.
