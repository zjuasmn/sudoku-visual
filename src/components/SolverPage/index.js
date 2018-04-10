import React from 'react';
import PropTypes from 'prop-types';
import Board from '../Board';
import { range9 } from '../../const';
import StepBoard from "../StepBoard";
import StepList from "../StepList";
import './index.css';
import solver from '../../solver';

export default class SolverPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: [],
      speed: -1,
      success: false,
      done: false,
      running: false,
      stepCount: 0,
    };
    this.tree = { parent: null, children: [] };
    this.node = this.tree;
    this.solver = solver(props.puzzle);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.puzzle !== this.props.puzzle) {
      this.solver = solver(nextProps.puzzle);
    }
  }

  getSteps = () => {
    let steps = [];
    for (let n = this.node; n.parent !== null; n = n.parent) {
      steps.push({ xIndex: n.xIndex, yIndex: n.yIndex, yIndexes: n.yIndexes });
    }
    return steps.reverse();
  };

  step = () => {
    const { done, running, speed, stepCount } = this.state;
    if (!done && !running) {
      const now = new Date();
      const { value, done } = this.solver.next();
      if (done) {
        this.setState({ done });
      } else if (value === false) {
        this.node = this.node.parent;
      } else if (value === true) {
        this.setState({ done, success: true });
      } else {
        this.node.children = [
          ...this.node.children,
          {
            parent: this.node,
            children: [],
            xIndex: value.xIndex,
            yIndex: value.yIndex,
            yIndexes: value.yIndexes,
          }
        ];
        this.node = this.node.children[this.node.children.length - 1];
        this.setState({
          done,
          steps: this.getSteps()
        })
      }
      this.setState({ stepCount: stepCount + 1 });
      if (speed >= 0) {
        this.setState({ running: true });
        this.timeoutId = setTimeout(() => {
          this.setState({ running: false });
          this.step();
        }, speed - (new Date() - now));
      }
    }
  };

  stop = () => {
    if (this.state.running) {
      clearTimeout(this.timeoutId);
      this.setState({
        running: false,
      })
    }
  };

  render() {
    const { puzzle } = this.props;
    const { steps, running, done, speed, stepCount } = this.state;
    const speedOptions = [
      { label: '0', speed: -1 },
      { label: '1x', speed: 1000 },
      { label: '2x', speed: 500 },
      { label: '4x', speed: 250 },
      { label: '8x', speed: 125 },
    ];
    return (
      <div className='SolverPage'>
        <StepBoard puzzle={puzzle} steps={steps} />
        <div>
          <div className='SolverPage-controls'>
            {
              done
                ? <span>{`Puzzle solved in ${stepCount} steps`}</span>
                : [

                  running
                    ? <a className='SolverPage-controlButton' key={1} onClick={this.stop}>PAUSE</a>
                    : <a className='SolverPage-controlButton' key={1} onClick={this.step}>RUN</a>
                  ,
                  <div key={2} className='SolverPage-speedOptions'>
                    {speedOptions.map((speedOption) =>
                      <a
                        key={speedOption.label}
                        onClick={() => this.setState({ speed: speedOption.speed })}
                        className={`SolverPage-speedOption ${speed === speedOption.speed ? 'active' : ''}`}
                      >
                        {speedOption.label}
                      </a>
                    )}
                  </div>
                ]
            }
          </div>
          <div>
            <StepList steps={steps} />
            {/*{JSON.stringify(steps)}*/}
          </div>

        </div>
      </div>
    )
  }
}

SolverPage.propTypes = {
  puzzle: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
};