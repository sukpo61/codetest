function findvalue(board, x, y) {
  let value;
  board.map((yvalue, yindex) => {
    yvalue.map((xvalue, xindex) => {
      if (x == xindex && y == yindex) {
        value = xvalue;
      }
    });
  });
  return value;
}

function AddBlock(board) {
  let boardbefore = board;

  function Findblockedcount(x, y) {
    let blockedcount = 0;
    if (findvalue(board, x + 1, y) == 1 || x + 1 >= board.length) {
      blockedcount++;
    }
    if (findvalue(board, x - 1, y) == 1 || x == 0) {
      blockedcount++;
    }
    if (findvalue(board, x, y + 1) == 1 || y + 1 >= board.length) {
      blockedcount++;
    }
    if (findvalue(board, x, y - 1) == 1 || y == 0) {
      blockedcount++;
    }
    return blockedcount;
  }

  let boardafter = boardbefore.map((yvalue, yindex) =>
    yvalue.map((xvalue, xindex) => {
      if (xvalue == 1) {
        return 1;
      }
      if (xindex == board.length - 1 && yindex == board.length - 1) {
        return 0;
      }
      if (Findblockedcount(xindex, yindex) >= 3 && xvalue == 0) {
        return 1;
      } else {
        return 0;
      }
    })
  );

  if (JSON.stringify(boardafter) == JSON.stringify(boardbefore)) {
    return boardafter;
  } else {
    return AddBlock(boardafter);
  }
}

function searchNext(board, point, comingdirection, pay) {
  let payed = pay;
  let currentLo = point;
  let xfeild = board[currentLo[1]];
  let yfeild = board.map((e) => e[currentLo[0]]);
  let afterdirection;

  if ((comingdirection = "Left")) {
    if (findvalue(board, currentLo[0], currentLo[1] + 1) == 0) {
      for (let i = currentLo[0]; 0 <= i && i < yfeild.length; i++) {
        payed = payed + 100;
        if (yfeild[i] == 1) {
          currentLo = [currentLo[0], i - 1];
          break;
        }
        currentLo = [currentLo[0], i];
      }
      afterdirection = "Up";
    } else {
      for (let i = currentLo[0]; 0 <= i && i < yfeild.length; i--) {
        payed = payed + 100;
        if (yfeild[i] == 1) {
          currentLo = [currentLo[0], i + 1];
          break;
        }
        currentLo = [currentLo[0], i];
      }
      afterdirection = "Down";
    }
  }

  if ((comingdirection = "Up")) {
    if (findvalue(board, currentLo[0] + 1, currentLo[1]) == 0) {
      for (let i = currentLo[1]; 0 <= i && i < xfeild.length; i++) {
        payed = payed + 100;

        if (xfeild[i] == 1) {
          currentLo = [i - 1, currentLo[1]];
          break;
        }
        currentLo = [i, currentLo[1]];
      }
      afterdirection = "Left";
    } else {
      for (let i = currentLo[1]; 0 <= i && i < xfeild.length; i--) {
        payed = payed + 100;

        if (xfeild[i] == 1) {
          currentLo = [i + 1, currentLo[1]];
          break;
        }
        currentLo = [i, currentLo[1]];
      }
      afterdirection = "Right";
    }
  }
  if ((comingdirection = "Right")) {
    for (let i = currentLo[0]; 0 <= i && i < yfeild.length; i++) {
      payed = payed + 100;

      if (yfeild[i] == 1) {
        currentLo = [currentLo[0], i - 1];
        break;
      }
      currentLo = [currentLo[0], i];
    }
    afterdirection = "Down";
  }
  if ((comingdirection = "Down")) {
    for (let i = currentLo[1]; 0 <= i && i < xfeild.length; i++) {
      payed = payed + 100;

      if (xfeild[i] == 1) {
        currentLo = [i - 1, currentLo[1]];
        break;
      }
      currentLo = [i, currentLo[1]];
    }
    afterdirection = "Left";
  }

  payed = payed + 500;

  if (
    JSON.stringify(currentLo) ==
    JSON.stringify([board.length - 1, board.length - 1])
  ) {
    return payed;
  } else {
    console.log("currentLo", currentLo);
    return searchNext(board, currentLo, afterdirection, payed);
  }
}

function FirstXLo(board) {
  let payed = 0;
  let currentLo = [0, 0];

  let xfeild = board[0];

  for (let i = 0; i < xfeild.length; i++) {
    payed = payed + 100;

    if (xfeild[i] == 1) {
      currentLo = [i - 1, 0];
      break;
    }
    currentLo = [i, 0];
  }

  return searchNext(board, currentLo, "Left", payed);
}

function FirstYLo(board) {
  let payed = 0;
  let currentLo = [0, 0];

  let yfeild = board.map((e) => e[0]);

  for (let i = 0; i < yfeild.length; i++) {
    if (yfeild[i] == 1) {
      currentLo = [0, i - 1];
      break;
    }
    currentLo = [0, i];
  }

  return searchNext(board, currentLo, "UP", payed);
}

function solution(board) {
  let AddedBoard = AddBlock(board);

  //   return Math.min(FirstXLo(AddedBoard), FirstYLo(AddedBoard));
  return FirstYLo(AddedBoard);
}

console.log(
  solution([
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 0],
    [0, 0, 1, 0, 0, 0],
    [1, 0, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0],
  ])
);

// 세, 네군데가 다 막히면 무조건 벽으로 처리함.
// 세군데 벽일때 나머지 하나 검색해서 세군에 벽이면 마찬가지로 벽처리함. 반복하다가 두군데 이상이면 중지

// 기본적으로 빔을 쐈을때 아래 오른쪽에 벽이 없는쪽으로 검색 둘다 충족하면 둘다 감
// 아래 둘다 막히면 왔던길 제외하고 나머지 하나로 감.
// 끝이 나올 때 까지 반복
// 왔던 길중에서  최솟값 출력.
