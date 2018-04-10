import React from 'react';
import StepIcon from '../StepIcon';
import StepState from "../StepState";
import './index.css';
import { xInfo } from "../../utils";

export default class StepList extends React.PureComponent {

  render() {
    const { steps } = this.props;
    return <div className='StepList'>
      {
        steps.map((step, i) => {
          const { xIndex, yIndex, yIndexes } = step;
          const { type, index } = xInfo(xIndex);
          return (
            <div key={i} className='StepList-item'>
              <StepIcon type={type} index={index} />
              <StepState type={type} yIndexes={yIndexes} yIndex={yIndex} />

            </div>
          );
        })
      }
    </div>
  }
}