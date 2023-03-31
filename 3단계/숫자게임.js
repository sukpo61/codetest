function solution(A, B) {
  let answer = 0;
  let count = A.length;

  for (let i = 0; i < count; i++) {
    let Amax = Math.max(...A);
    let Amin = Math.min(...A);
    let Bmin = Math.min(...B);
    console.log(A, B);
    if (Bmin > Amin) {
      let Aindex = A.indexOf(Amin);
      let Bindex = B.indexOf(Bmin);
      if (Aindex > -1) {
        A.splice(Aindex, 1);
      }
      if (Bindex > -1) {
        B.splice(Bindex, 1);
      }
      answer++;
    } else {
      let Aindex = A.indexOf(Amax);
      let Bindex = B.indexOf(Bmin);
      if (Aindex > -1) {
        A.splice(Aindex, 1);
      }
      if (Bindex > -1) {
        B.splice(Bindex, 1);
      }
    }
  }
  return answer;
}

console.log(solution([5, 1, 3, 7], [2, 2, 6, 8]));
