import React from 'react';

export default class Board extends React.Component {
  isValid(row, col, num) {
    const { puzzle } = this.props;
    for (let i = 0; i < 9; ++i) {
      if (puzzle[row][i] === num.toString()
        || puzzle[i][col] === num.toString()
        || puzzle[Math.floor(row / 3) * 3 + Math.floor(i / 3)][Math.floor(col / 3) * 3 + i % 3] === num.toString()
      ) {
        return false;
      }
    }
    return true;
  }

  render() {
    const { puzzle, current } = this.props;
    const x = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    return (
      <table className='board'>
        <tbody>
        {x.map(row =>
          <tr key={row}>
            {
              x.map(col =>
                <td key={col}>
                  <div className='cell'>
                    {
                      /[1-9]/.test(puzzle[row][col]) ?
                        <span className='cell-fixed'>{puzzle[row][col]}</span>
                        : x.map(num => <a key={num}
                                          className={

                                              this.isValid(row, col, num + 1) ? 'option' : 'option invalid'

                                          }>{num + 1}</a>)

                    }
                    {
                      current[row][col] ? <a className='chosen'>{current[row][col]}</a> : ''
                    }
                  </div>
                </td>
              )
            }
          </tr>
        )}
        </tbody>
      </table>
    )

  }
}