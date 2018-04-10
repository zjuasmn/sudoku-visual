import React from 'react';
import { Types, pixelUnit } from '../../const';
import './index.css';

export default class StepIcon extends React.PureComponent {
  render() {
    const { type, index } = this.props;

    switch (type) {
      case Types.ROW:
        return (
          <div className='StepIcon'
               title={`Guess the position on of number ${index % 9 + 1}in row ${Math.floor(index / 9) + 1}`}>
            <div className="StepIcon-board">
              <div className='StepIcon-row' style={{ top: Math.floor(index / 9) * pixelUnit }} />
            </div>
            <div className='StepIcon-num'>{index % 9 + 1}</div>
          </div>
        );
      case Types.COL:
        return (
          <div className='StepIcon'
               title={`Guess the position on of number ${index % 9 + 1}in col ${Math.floor(index / 9) + 1}`}>
            <div className="StepIcon-board">
              <div className='StepIcon-col' style={{ left: Math.floor(index / 9) * pixelUnit }} />
            </div>
            <div className='StepIcon-num'>{index % 9 + 1}</div>
          </div>
        );
      case Types.BLOCK:
        return (
          <div className='StepIcon'
               title={`Guess the position on of number ${index % 9 + 1}in block ${Math.floor(index / 9) + 1}`}>
            <div className="StepIcon-board">
              <div className='StepIcon-block'
                   style={{
                     top: Math.floor(index / 9 / 3) * 3 * pixelUnit,
                     left: Math.floor(index / 9) % 3 * 3 * pixelUnit
                   }} />
            </div>
            <div className='StepIcon-num'>{index % 9 + 1}</div>
          </div>
        );
      case Types.CELL:
        return (
          <div className='StepIcon' title={`Guess the number on row ${Math.floor(index / 9) + 1} col ${index % 9 + 1}`}>
            <div className="StepIcon-board">
              <div className='StepIcon-block-empty'
                   style={{
                     top: Math.floor(index / 9 / 3) * 3 * pixelUnit,
                     left: Math.floor(index % 9 / 3) * 3 * pixelUnit
                   }}>
                <div className='StepIcon-cell'
                     style={{
                       top: Math.floor(index / 9 % 3) * pixelUnit,
                       left: Math.floor(index % 9 % 3) * pixelUnit
                     }} />
              </div>
            </div>
            <div className='StepIcon-num'>?</div>
          </div>
        );
    }
  }
}
