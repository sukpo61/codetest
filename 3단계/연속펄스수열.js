function findMaxSum(arr) {
  let currentSum = arr[0];
  let maxSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);

    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

function solution(sequence) {
  let pulse1 = sequence.map((e, index) => {
    if (index % 2 == 0) {
      return e;
    } else {
      return -e;
    }
  });
  let pulse2 = sequence.map((e, index) => {
    if (index % 2 == 0) {
      return -e;
    } else {
      return e;
    }
  });

  let pulse1Max = findMaxSum(pulse1);
  let pulse2Max = findMaxSum(pulse2);

  return Math.max(pulse1Max, pulse2Max);
}

console.log(solution([2, 3, -6, 1, 3, -1, 2, 4]));
