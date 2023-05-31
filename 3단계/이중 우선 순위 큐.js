function D1(array) {
  let sortedarray = array.sort((a, b) => a - b);
  sortedarray.shift();
  return sortedarray;
}
function D2(array) {
  let sortedarray = array.sort((a, b) => a - b);
  sortedarray.pop();
  return sortedarray;
}
function D3(array) {
  let sortedarray = array.sort((a, b) => b - a);
  sortedarray = sortedarray.filter(
    (e, i) => i == 0 || i == sortedarray.length - 1
  );
  return sortedarray;
}

function solution(operations) {
  let answer = [];

  operations.map((e) => {
    if (e.slice(0, 1) == "I") {
      answer.push(Number(e.slice(2)));
    }
    if (e == "D 1") {
      answer = D2(answer);
    }
    if (e == "D -1") {
      answer = D1(answer);
    }
  });

  return D3(answer);
}

console.log(
  solution([
    "I -45",
    "I 653",
    "D 1",
    "I -642",
    "I 45",
    "I 97",
    "D 1",
    "D -1",
    "I 333",
  ])
);
