let answer = "-1 -2 -3 -4";

function solution(s) {
  let array = s.split(` `);
  array = array.map((e) => parseInt(e));
  array = array.sort((a, b) => a - b);
  array = array.slice(0, 1).concat(array.slice(-1));
  array = array.join(" ");
  return array;
}

console.log("answer", solution(answer));
