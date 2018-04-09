import React from 'react';
import { range9 } from '../../const';
import './index.css';
//
// <div className='cell'>
//   {
//     /[1-9]/.test(puzzle[row][col]) ?
//       <span className='cell-fixed'>{puzzle[row][col]}</span>
//       : range9.map(num => <a key={num}
//                              className={
//                                this.isValid(row, col, num + 1) ? 'option' : 'option invalid'
//                              }>{num + 1}</a>)
//
//   }
//   {
//     current[row][col] ? <a className='chosen'>{current[row][col]}</a> : ''
//   }
// </div>
export default class Index extends React.Component {
  // isValid(row, col, num) {
  //   const { puzzle } = this.props;
  //   for (let i = 0; i < 9; ++i) {
  //     if (puzzle[row][i] === num.toString()
  //       || puzzle[i][col] === num.toString()
  //       || puzzle[Math.floor(row / 3) * 3 + Math.floor(i / 3)][Math.floor(col / 3) * 3 + i % 3] === num.toString()
  //     ) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }

  render() {
    const { renderCell, className = '', ...props } = this.props;
    return (
      <table className={`Board ${className}`} {...props}>
        <tbody>
        {range9.map(row =>
          <tr key={row}>
            {range9.map(col =>
              <td key={col}>{renderCell(row, col)}</td>
            )}
          </tr>
        )}
        </tbody>
      </table>
    )
  }
}