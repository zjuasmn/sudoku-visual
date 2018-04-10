import React from 'react';
import Board from '../Board';
import { range9 } from '../../const';
import './index.css';
import { blockIndex } from "../../utils";

export default class StepBoard extends React.PureComponent {
  render() {
    const { puzzle, steps } = this.props;
    let pRowMask = range9.map(() => 0), pColMask = range9.map(() => 0), pBlockMask = range9.map(() => 0);
    let sRowMask = range9.map(() => 0), sColMask = range9.map(() => 0), sBlockMask = range9.map(() => 0);

    let cells = range9.map(row => range9.map(col => puzzle[row][col] ?
      <span className='cell cell-fixed'>{puzzle[row][col]}</span> : null));

    steps.forEach(({ yIndex }, i) => {
      const row = Math.floor(yIndex / 81);
      const col = Math.floor(yIndex / 9) % 9;
      const num = yIndex % 9;
      cells[row][col] = i === steps.length - 1
        ? <span className='cell cell-current'>{num + 1}</span>
        : <span className='cell cell-prev'>{num + 1}</span>
    });

    range9.forEach(row => {
      range9.forEach(col => {
        if (puzzle[row][col]) {
          const num = puzzle[row][col] - 1;
          pRowMask[row] ^= (1 << num);
          pColMask[col] ^= (1 << num);
          pBlockMask[blockIndex(row, col)] ^= (1 << num);
        }
      })
    });

    steps.forEach(({ yIndex }) => {
      const row = Math.floor(yIndex / 81);
      const col = Math.floor(yIndex / 9) % 9;
      const num = yIndex % 9;

      sRowMask[row] ^= (1 << num);
      sColMask[col] ^= (1 << num);
      sBlockMask[blockIndex(row, col)] ^= (1 << num);
    });


    range9.forEach(row => {
      range9.forEach(col => {
        if (!cells[row][col]) {
          cells[row][col] = (
            <span className='cell'>
              {range9.map(num => {
                let classNames = ['cell-option'];
                if ((1 << num) & (pRowMask[row] | pColMask[col] | pBlockMask[blockIndex(row, col)])) {
                  classNames.push('cell-option-invalid');
                } else if ((1 << num) & (sRowMask[row] | sColMask[col] | sBlockMask[blockIndex(row, col)])) {
                  classNames.push('cell-option-marked');
                }
                return <span key={num} className={classNames.join(' ')}>
                  {num + 1}
                  </span>
              })}
            </span>
          );
        }
      })
    });

    return (
      <Board className='StepBoard' renderCell={(row, col) => cells[row][col]} />
    );
  }
}