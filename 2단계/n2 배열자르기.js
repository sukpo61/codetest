let answer = "-1 -2 -3 -4";

function solution(n, left, right) {
  let array = [];

  for (let i = 0; i < n; i++) {
    let static = new Array(n).fill(0).map((_, n) => n + 1);
    static = static.map((num) => {
      if (num <= i) {
        return i + 1;
      } else {
        return num;
      }
    });
    array = array.concat(static);
  }

  array = array.slice(left, right + 1);

  return array;
}

console.log("answer", solution(4, 7, 14));
