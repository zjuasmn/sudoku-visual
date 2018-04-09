import React from 'react';
import { Types, pixelUnit } from '../const';
import './StepIcon.css';

export default ({ type, index }) => {
  switch (type) {
    case Types.ROW:
      return (
        <div className='StepIcon'>
          <div className="StepIcon-board">
            <div className='StepIcon-row' style={{ top: Math.floor(index / 9) * pixelUnit }}/>
          </div>
          <div className='StepIcon-num'>{index % 9 + 1}</div>
        </div>
      );
    case Types.COL:
      return (
        <div className='StepIcon'>
          <div className="StepIcon-board">
            <div className='StepIcon-col' style={{ left: Math.floor(index / 9) * pixelUnit }}/>
          </div>
          <div className='StepIcon-num'>{index % 9 + 1}</div>
        </div>
      );
    case Types.BLOCK:
      return (
        <div className='StepIcon'>
          <div className="StepIcon-board">
            <div className='StepIcon-block'
                 style={{
                   top: Math.floor(index / 9 / 3) * 3 * pixelUnit,
                   left: Math.floor(index / 9) % 3 * 3 * pixelUnit
                 }}/>
          </div>
          <div className='StepIcon-num'>{index % 9 + 1}</div>
        </div>
      );
    case Types.CELL:
      return (
        <div className='StepIcon'>
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
                   }}/>
            </div>
          </div>
          <div className='StepIcon-num'>?</div>
        </div>
      );
  }

};