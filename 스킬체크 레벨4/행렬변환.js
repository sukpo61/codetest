function solution(rc, operations) {
  let current = [...rc];

  function ShiftRow(array) {
    let beforearray = [...array];

    let afterarray = beforearray.map((y, yindex) => {
      return y.map((x, xindex) => {
        if (yindex == 0) {
          return beforearray[beforearray.length - 1][xindex];
        } else {
          return beforearray[yindex - 1][xindex];
        }
      });
    });

    return afterarray;
  }

  function Rotate(array) {
    let beforearray = [...array];

    let afterarray = beforearray.map((y, yindex) => {
      return y.map((x, xindex) => {
        if (yindex == 0 || yindex == beforearray.length - 1) {
          if (yindex == 0) {
            if (xindex == 0) {
              return beforearray[1][0];
            } else {
              return beforearray[yindex][xindex - 1];
            }
          }
          if (yindex == beforearray.length - 1) {
            if (xindex == y.length - 1) {
              return beforearray[beforearray.length - 2][xindex];
            } else {
              return beforearray[yindex][xindex + 1];
            }
          }
        }
        if (xindex == 0) {
          return beforearray[yindex + 1][xindex];
        }
        if (xindex == y.length - 1) {
          return beforearray[yindex - 1][xindex];
        }
        return x;
      });
    });

    return afterarray;
  }

  operations.map((e) => {
    if (e == "ShiftRow") {
      current = ShiftRow(current);
    } else {
      current = Rotate(current);
    }
  });

  return current;
}

console.log(
  solution(
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ],
    ["ShiftRow", "Rotate", "ShiftRow", "Rotate"]
  )
);
