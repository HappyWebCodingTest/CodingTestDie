// 프로그래머스 레벨2
//H-Index
function solution(citations) {
  citations.sort((a, b) => b - a);

  n = citations.length;
  for (let i = 0; i < n; i++) {
    if (i >= citations[i]) return i;
  }
  return n;
}
