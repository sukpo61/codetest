let number = 3;

function solution(s) {
  let answer = "*";
  let block = "*";

  for (let i = 1; i <= s; i++) {
    if (i === 1) {
      answer = "*";
    } else {
      answer = answer + `\n${block.repeat(i)}`;
    }
  }

  return answer;
}

console.log(solution(number));
