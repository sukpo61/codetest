function solution(string, hand) {
  let stringArray = string.split("").filter((e) => e !== " ");

  let NumberPad = [
    [".,?!", "ABC", "DEF"],
    ["GHI", "JKL", "MNO"],
    ["PQRS", "TUV", "WXYZ"],
    ["*", "(){}[]", "#"],
  ];

  function distance(point1, point2) {
    const dx = point1[1] - point2[1];
    const dy = point1[0] - point2[0];
    return Math.abs(dx) + Math.abs(dy);
  }

  function findpoint(message) {
    let point = [0, 0];

    NumberPad.map((y, yindex) => {
      y.map((x, xindex) => {
        if (x.includes(message)) {
          point[0] = yindex;
          point[1] = xindex;
          console.log("point", point);
        }
      });
    });
    return point;
  }

  let answer = "";
  let leftpoint = [3, 0];
  let rightpoint = [3, 2];

  stringArray.map((message) => {
    console.log(message);

    let targetpoint = findpoint(message);
    let leftdistance = distance(leftpoint, targetpoint);
    let rightdistance = distance(rightpoint, targetpoint);

    console.log(leftpoint, rightpoint);

    if (leftdistance === rightdistance) {
      if (hand === "right") {
        answer = answer + "R";
        rightpoint = targetpoint;
        return;
      }
      if (hand === "left") {
        answer = answer + "L";
        leftpoint = targetpoint;
      }
      return;
    }
    if (leftdistance < rightdistance) {
      answer = answer + "L";
      leftpoint = targetpoint;
      return;
    }
    if (leftdistance > rightdistance) {
      answer = answer + "R";
      rightpoint = targetpoint;
      return;
    }
  });

  return answer;
}

console.log(solution("GET THIN", "right"));
