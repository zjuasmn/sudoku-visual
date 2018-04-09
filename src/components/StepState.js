import React from 'react';
import { Types, pixelUnit, range9 } from '../const';
import './StepState.css';

export default ({ type, state, visited }) => {
  switch (type) {
    case Types.ROW:
    case Types.COL:
    case Types.BLOCK:
      return (
        <div className='StepState'>
          {range9.map(num => <div key={num} className='StepState-num'>
          </div>)}
        </div>
      );
    case Types.CELL:
      return (
        <div className='StepState'>
          {range9.map(num =>
            <div key={num} className='StepState-num'>
              {num + 1}
            </div>)}
        </div>
      );
  }

};