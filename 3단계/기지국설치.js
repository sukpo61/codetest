function solution(n, stations, w) {
  let total = new Array(n).fill().map((_, index) => index + 1);

  stations.map((e) => {
    for (let i = e - w; i === e + w + 1; i++) {
      total.filter((n) => n === i);
    }
  });

  const nonConsecutiveIndexes = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== 1) {
      nonConsecutiveIndexes.push(i);
    }
  }

  const splitArr = [];

  let startIndex = 0;

  for (let i = 0; i < nonConsecutiveIndexes.length; i++) {
    const endIndex = nonConsecutiveIndexes[i];
    splitArr.push(arr.slice(startIndex, endIndex + 1));
    startIndex = endIndex + 1;
  }

  splitArr.push(arr.slice(startIndex));

  // 길이가 5 면, 3일때  3을 두번 빼면 0이 되니 0이 되는 시점의 수를 구함.  이부분만 알면 됨.
}

console.log(solution(11, [4, 11], 1));
