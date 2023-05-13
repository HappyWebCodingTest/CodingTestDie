// 프로그래머스 레벨2
//H-Index
//정렬
//H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다. 어느 과학자의 H-Index를 나타내는 값인 h를 구하려고 합니다. 위키백과1에 따르면, H-Index는 다음과 같이 구합니다.

// 어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다.

// 어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.

function solution(citations) {
  citations.sort((a, b) => b - a);

  n = citations.length;
  for (let i = 0; i < n; i++) {
    if (i >= citations[i]) return i;
  }
  return n;
}

//풀이
//(이거 문제 이해하는데 한국인 아닌줄 알았음)

// H-Index 의 횟수를 담은 배열 = citations
// n = citations.length 배열의 길이
// h => 얘가 아직까지도 정확하게 이해는 안됐는데 대충 이해한 걸 적으면 
// 논문을 우선 많이 인용된 순으로 정렬하고 =>(내림차순) n편중 h편 이상 인용된 논문은 h편 이상이고 h번 이하 인용되면 h의 최댓값이 H-Index가 된다. 
// 즉 배열의 인덱스 i가 n-1까지 반복해서 비교하는데 만약 i가 citations[i]와 같거나 크면 i개 이상이니까 i를 반환한다. 그리고 반복문이 다 끝날 때 까지 아무런 값이 반환되지 않으면
// n이 h의 최대 값이 되므로 H-Index 값이 n이 된다.