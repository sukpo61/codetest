function solution(cookie) {
  function splitArray(array, splitpoint) {
    let firstarray = array.slice(0, splitpoint);
    let secondarray = array.slice(splitpoint);
    return [firstarray, secondarray];
  }

  let equllsum = [];

  function firstarrayresults(array) {
    let answer = [];
    let reversed = array.reverse();
    reversed.map((e, index) => {
      let sum = 0;
      for (let i = 0; i < index + 1; i++) {
        sum = sum + reversed[i];
      }
      answer.push(sum);
    });
    return answer;
  }

  function secondarrayresults(array) {
    let answer = [];
    array.map((e, index) => {
      let sum = 0;
      for (let i = 0; i < index + 1; i++) {
        sum = sum + array[i];
      }
      answer.push(sum);
    });
    return answer;
  }

  for (let i = 0; i < cookie.length - 1; i++) {
    let splitedArray = splitArray(cookie, i + 1);
    let firstsum = firstarrayresults(splitedArray[0]);
    let secondsum = secondarrayresults(splitedArray[1]);

    firstsum.map((i) => {
      if (secondsum.includes(i)) {
        equllsum.push(i);
      }
    });
  }

  if (equllsum.length == 0) {
    return 0;
  } else {
    return Math.max(...equllsum);
  }
}

console.log(solution([1, 2, 4, 5]));
