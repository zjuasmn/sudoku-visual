import { blockIndex } from "./utils";

export default function* solver(puzzle) {
  const H = { xIndex: -1, yIndex: -1 };
  H.l = H.r = H.d = H.u = H;
  let X = [], Y = [];

  function insertRight(A, B = {}) {
    if (!B.u && !B.d) {
      B.u = B.d = B;
    }
    A.r.l = B;
    B.r = A.r;
    A.r = B;
    B.l = A;
    return B;
  }

  function insertDown(A, B = {}) {
    if (!B.l && !B.r) {
      B.l = B.r = B;
    }
    A.d.u = B;
    B.d = A.d;
    A.d = B;
    B.u = A;
    return B;
  }

  function remove(yHead) {
    for (let w = yHead.r; w !== yHead; w = w.r) {
      const x = X[w.xIndex];
      x.r.l = x.l;
      x.l.r = x.r;
      for (let y = x.d; y !== x; y = y.d) {
        const yHead2 = Y[y.yIndex];
        for (let z = yHead2.r; z !== yHead2; z = z.r) {
          --X[z.xIndex].count;
          z.d.u = z.u;
          z.u.d = z.d;
        }
      }
    }
  }

  function resume(yHead) {
    for (let w = yHead.l; w !== yHead; w = w.l) {
      const x = X[w.xIndex];
      for (let y = x.u; y !== x; y = y.u) {
        const yHead2 = Y[y.yIndex];
        for (let z = yHead2.l; z !== yHead2; z = z.l) {
          z.d.u = z;
          z.u.d = z;
          ++X[z.xIndex].count;
        }
      }
      x.r.l = x;
      x.l.r = x;
    }
  }

  for (let i = 0; i < 4 * 81; ++i) {
    X.push(insertRight(H.l, { xIndex: i, count: 0 }));
  }

  for (let i = 0; i < 9; ++i) {
    for (let j = 0; j < 9; ++j) {
      for (let k = 0; k < 9; ++k) {
        const yIndex = i * 81 + j * 9 + k;
        Y.push(insertDown(H.u, { yIndex }));

        if (!puzzle[i][j] || puzzle[i][j] === k + 1) {
          [i * 9 + j, 81 + i * 9 + k, 2 * 81 + j * 9 + k, 3 * 81 + blockIndex(i, j) * 9 + k]
            .forEach(xIndex => {
              ++X[xIndex].count;
              insertRight(Y[yIndex].l,
                insertDown(X[xIndex].u, { xIndex, yIndex })
              );
            });
        }
      }
    }
  }

  for (let i = 0; i < 9; ++i) {
    for (let j = 0; j < 9; ++j) {
      if (puzzle[i][j]) {
        remove(Y[i * 81 + j * 9 + puzzle[i][j] - 1]);
      }
    }
  }

  function* dfs() {
    if (H.r === H) {
      yield true;
      return;
    }
    let minCount = 10, minX;
    for (let x = H.r; x !== H; x = x.r) {
      if (x.count < minCount) {
        minCount = x.count;
        minX = x;
      }
    }
    if (minCount === 0) {
      yield false;
      return;
    }
    let yIndexes = [];
    for (let z = minX.d; z !== minX; z = z.d){
      yIndexes.push(z.yIndex);
    }
    for (let z = minX.d; z !== minX; z = z.d) {
      remove(Y[z.yIndex]);
      yield {
        xIndex: z.xIndex,
        yIndex: z.yIndex,
        yIndexes,
      };
      for (let result of dfs()) {
        yield result;
        if (result === true) {
          return;
        }
      }
      resume(Y[z.yIndex]);
    }
    yield false;
  }

  yield* dfs();
}
