function solution(n, works) {
  const totalwork = works.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  if (totalwork <= n) {
    return 0;
  } else {
    for (let i = 0; i < n; i++) {
      works = works.sort((a, b) => b - a);
      works[0] = works[0] - 1;
    }
    const answer = works.reduce(
      (accumulator, currentValue) => accumulator + currentValue ** 2,
      0
    );
    return answer;
  }
}

console.log(solution(9, [5, 4, 3, 10]));
