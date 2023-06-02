function solution(board) {
  const N = board.length;
  const INF = 1000000000; // 무한대 값으로 초기화

  // 최소 비용을 저장하는 2차원 배열
  const dp = Array.from(Array(N), () => Array(N).fill(INF));

  // 초기값 설정
  dp[0][0] = 0;

  // 상, 하, 좌, 우 이동 방향
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  // BFS를 위한 큐
  const queue = [];
  queue.push([0, 0, -1, 0]); // [x, y, direction, cost]

  while (queue.length > 0) {
    const [x, y, direction, cost] = queue.shift();

    // 상, 하, 좌, 우 이동
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      // 이동이 가능한 경우
      if (nx >= 0 && nx < N && ny >= 0 && ny < N && board[nx][ny] === 0) {
        let nextCost = 0;

        if (direction === -1 || direction === i) {
          // 직진하는 경우
          nextCost = cost + 100;
        } else {
          // 코너를 만드는 경우
          nextCost = cost + 600;
        }

        // 다음 위치의 비용이 현재 비용보다 작은 경우
        if (nextCost <= dp[nx][ny]) {
          dp[nx][ny] = nextCost;
          queue.push([nx, ny, i, nextCost]);
        }
      }
    }
  }

  return dp[N - 1][N - 1];
}
