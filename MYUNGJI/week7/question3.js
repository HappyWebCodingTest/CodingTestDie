//분할정복
//프로그래머스 레벨2
//쿼드 압축후 수세기

function compress(arr, x, y, n, result) {
  //모두 같은 수면 종료시키기!
  if (checkForm(arr, x, y, n)) {
    result[arr[x][y]]++;
    return;
  }

  // 포인뚜! 4개의 균일한 정사각형 영역으로 분할하여 재귀 호출
  const half = n / 2;
  compress(arr, x, y, half, result);
  compress(arr, x, y + half, half, result);
  compress(arr, x + half, y, half, result);
  compress(arr, x + half, y + half, half, result);
}

function checkForm(arr, x, y, n) {
  // 영역 내의 값이 모두 같은지 확인
  const value = arr[x][y];
  for (let i = x; i < x + n; i++) {
    for (let j = y; j < y + n; j++) {
      if (arr[i][j] !== value) {
        return false;
      }
    }
  }
  return true;
}

function solution(arr) {
  const result = [0, 0]; // 0,1개수 저장
  compress(arr, 0, 0, arr.length, result);
  return result;
}

//왕 분할해서 생각하고 문제푸는게 생각보다 어렵네윱...
