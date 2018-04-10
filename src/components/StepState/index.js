import React from 'react';
import { Types, range9 } from '../../const';
import './index.css';

export default class StepState extends React.PureComponent {
  render() {
    const { type, yIndexes, yIndex } = this.props;
    const i = Math.floor(yIndex / 81);
    const j = Math.floor(yIndex / 9) % 9;
    const k = yIndex % 9;
    let options = [];
    switch (type) {
      case Types.CELL:
        options = range9.map(_k => i * 81 + j * 9 + _k);
        break;
      case Types.ROW:
        options = range9.map(_j => i * 81 + _j * 9 + k);
        break;
      case Types.COL:
        options = range9.map(_i => _i * 81 + j * 9 + k);
        break;
      case Types.BLOCK:
        options = range9.map(_x => (i + Math.floor(x / 3)) * 81 + (j + _x % 3) * 9 + k);
        break;
    }
    let visited = false;
    return (
      <div className='StepState'>
        {
          options.map((option, k) => {
            let classNames = ['StepState-option'];
            if (yIndexes.indexOf(option) < 0) {
              classNames.push('StepState-option-invalid')
            } else {
              classNames.push('StepState-option-valid');
              if (!visited) {
                if (option === yIndex) {
                  visited = true;
                  classNames.push('StepState-option-current');
                } else {
                  classNames.push('StepState-option-prev');
                }
              }
            }
            return (
              <div key={option}
                   className={classNames.join(' ')}>
                {type === Types.CELL ? k + 1 : null}
              </div>);
          })
        }
      </div>
    );

  }
}
