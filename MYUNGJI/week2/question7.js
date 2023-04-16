//프로그래머스 레벨 0

// 머쓱이는 태어난 지 6개월 된 조카를 돌보고 있습니다. 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음을 최대 한 번씩 사용해 조합한(이어 붙인) 발음밖에 하지 못합니다. 문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.
// 제한사항
// 1 ≤ babbling의 길이 ≤ 100
// 1 ≤ babbling[i]의 길이 ≤ 15
// babbling의 각 문자열에서 "aya", "ye", "woo", "ma"는 각각 최대 한 번씩만 등장합니다.
// 즉, 각 문자열의 가능한 모든 부분 문자열 중에서 "aya", "ye", "woo", "ma"가 한 번씩만 등장합니다.
// 문자열은 알파벳 소문자로만 이루어져 있습니다.

function solution(babbling) {
  let answer = 0;
  for (i = 0; i < babbling.length; i++) {
    if (
      babbling[i]
        .replace("ye", " ")
        .replace("aya", " ")
        .replace("woo", " ")
        .replace("ma", " ")
        .trim() == ""
    ) {
      answer++;
    }
  }
  return answer;
}

// 다른 풀이
function solution(babbling) {
  var answer = 0;
  babbling.forEach((element) => {
    if (element.split(/aya|ye|woo|ma/g).join("") === "") {
      answer++;
    }
  });
  return answer;
}

function solution(babbling) {
  var answer = 0;
  const regex = /^(aya|ye|woo|ma)+$/;

  babbling.forEach((word) => {
    if (regex.test(word)) answer++;
  });

  return answer;
}

// 문자열은 정규식 표현을 사용하는게 깔끔한 것 같다 ! 빨리 정규식 표현에 익숙해져야겠다!
