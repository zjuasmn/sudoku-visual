const numOfOnes = [0];

for (let k = 1; k < (1 << 9); ++k) {
  numOfOnes[k] = numOfOnes[k & (k - 1)] + 1;
}

const state = {
  rowMask: [],
  colMask: [],
  blockMask: [],
  cellMask: [],
  options: [],
};

function nextStep(puzzle, current, state) {
  const { rowMask, colMask, blockMask, cellMask } = state;
  let minChoice = 10;
  let type;
  let index;

  ['rowMask', 'colMask', 'blockMask', 'cellMask'].forEach(maskType => {
    for (let i = 0; i < 81; ++i) {
      if (9 - numOfOnes[state[maskType][i]] < minChoice) {
        minChoice = 9 - numOfOnes[rowMask[i]];
        type = maskType;
        index = i;
      }
    }
  });
  if (minChoice === 0) {
    return null;
  }
  for (let k = 0; k < 9; ++k) {
    if ((state[type][index] & (1 << k)) === 0) {
      switch (type) {
        case 'cellMask':
          return [index / 9, index % 9, k];
        case 'blockMask':
          return [index / 3 * 3 + k, index % 3 * 9, k];
        default:
          return;
      }
    }
  }
}