import React from 'react';
import Board from '../Board';
import { range9 } from '../../const';
import './index.css';

export default class InputBoard extends React.Component {
  isValid(row, col) {
    const { puzzle } = this.props;
    const num = puzzle[row][col];
    if (!num) {
      return true;
    }
    for (let i = 0; i < 9; ++i) {
      if (i !== col && puzzle[row][i] === num) {
        return false;
      }
      if (i !== row && puzzle[i][col] === num) {
        return false;
      }
      const _row = Math.floor(row / 3) * 3 + Math.floor(i / 3);
      const _col = Math.floor(col / 3) * 3 + Math.floor(i % 3);
      if ((_row !== row || _col !== col) && puzzle[_row][_col] === num) {
        return false;
      }
    }
    return true;
  }

  render() {
    const { puzzle, onChange } = this.props;

    return <Board className='InputBoard' renderCell={(row, col) => (
      <div className={`cell  ${this.isValid(row, col) ? '' : 'invalid'}`}>
        {puzzle[row][col] > 0
          ? <a className={`cell-fixed`}
               onClick={() => onChange(row, col, 0)}>{puzzle[row][col]}</a>
          : range9.map(num =>
            <a key={num} className={'option'} onClick={() => onChange(row, col, num + 1)}>
              {num + 1}
            </a>)
        }
      </div>
    )}/>
  }
}