function solution(n, s) {
  if (n > s) {
    return [-1];
  } else {
    const dividend = s; // 피제수
    const divisor = n; // 제수
    const quotient = Math.floor(dividend / divisor); // 몫 계산
    const remainder = dividend % divisor; // 나머지 계산

    let arr = new Array(n).fill(quotient); // 길이가 5인 배열 생성 후 1로 초기화

    for (let i = 1; i <= remainder; i++) {
      arr[arr.length - i]++;
    }

    return arr;
  }
}

console.log(solution(4, 22));
