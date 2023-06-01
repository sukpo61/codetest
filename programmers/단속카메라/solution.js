// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/42884

function solution(routes) {
  // 진출 지점을 기준으로 오름차순으로 정렬
  routes.sort((a, b) => a[1] - b[1]);

  let answer = 0; // 설치된 카메라의 수
  let camera = -30001; // 카메라의 위치, 초기값은 가장 작은 값으로 설정

  for (let i = 0; i < routes.length; i++) {
    const entry = routes[i][0];
    const exit = routes[i][1];

    if (camera < entry) {
      // 카메라가 차량의 진입 지점보다 앞에 있으면 카메라를 설치하고 위치를 갱신
      answer++;
      camera = exit;
    }
  }

  return answer;
}