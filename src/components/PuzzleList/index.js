import React from 'react';
import Board from '../Board';
import './index.css';

export default class PuzzleList extends React.Component {
  render() {
    const { puzzles, onSelect } = this.props;

    return (
      <div className='PuzzleList'>
        {puzzles.map((puzzle, i) =>
          <Board key={i}
                 onMouseDown={() => onSelect(i)} renderCell={(row, col) => (
            <div className='cell'>
              {puzzle[row][col] > 0 ? puzzle[row][col] : ''}
            </div>
          )}/>
        )}
      </div>
    );
  }
}