function solution(d, budget) {
  let sorted = d.sort((a, b) => a - b);
  let answer = 0;
  let expanded = 0;

  for (let i = 0; i < sorted.length; i++) {
    expanded = expanded + sorted[i];
    if (expanded <= budget) {
      answer = answer + 1;
    } else {
      break;
    }
  }

  return answer;
}

console.log(solution([1, 3, 2, 5, 4], 9));
