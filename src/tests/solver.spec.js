import solver from '../solver';
import { expect } from 'chai';

const puzzle = [
  [0, 3, 4, 1, 0, 0, 0, 6, 0],
  [0, 0, 9, 4, 0, 8, 0, 0, 0],
  [0, 0, 1, 6, 0, 0, 4, 9, 0],
  [0, 2, 8, 0, 3, 0, 0, 4, 0],
  [3, 9, 0, 0, 0, 0, 0, 2, 5],
  [0, 7, 0, 0, 6, 0, 1, 8, 0],
  [0, 1, 3, 0, 0, 2, 5, 0, 4],
  [0, 0, 0, 3, 0, 6, 8, 0, 0],
  [0, 8, 0, 0, 0, 1, 6, 3, 0],
];

describe('solver', () => {
  it('works', () => {
    let x = solver(puzzle);
    for (let step of x) {
      if (step === true || step === false) {
        console.log(step);
        continue;
      }
      const i = Math.floor(step.yIndex / 81);
      const j = Math.floor(step.yIndex / 9) % 9;
      const num = step.yIndex % 9;
      let type;
      if (step.xIndex < 81) {
        type = 'cell';
      } else if (step.xIndex < 2 * 81) {
        type = 'row';

      } else if (step.xIndex < 3 * 81) {
        type = 'col';

      } else {
        type = 'block';
      }
      console.log(`${type} ${Math.floor(step.yIndex / 9) % 9} ${step.yIndex % 9} (${i},${j}):=${num + 1}`);
    }

  });
});