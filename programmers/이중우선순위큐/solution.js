// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/42628?language=javascript

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

if(answer.length == 0){
    return [0,0]
}else{
    return D3(answer); 
}
 
}