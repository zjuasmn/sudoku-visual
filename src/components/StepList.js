import React from 'react';
import StepIcon from './StepIcon';
import StepState from "./StepState";
import './StepList.css';

export default class StepList extends React.Component {

  render() {
    const { steps } = this.props;
    return <div className='StepList'>
      {
        steps.map((step, i) => (
          <div key={i} className='StepList-item'>
            <StepIcon type={step.type} index={step.index}/>
            <StepState type={step.type} state={step.state}/>
          </div>
        ))
      }
    </div>
  }
}