import React, { Component } from 'react';
import './App.css';
import Board from "./components/Board";
const evilPuzzle = [
  '094080020',
  '060007000',
  '700000003',
  '430050900',
  '020000010',
  '006090034',
  '600000001',
  '000700050',
  '080030690',
];
const puzzle = [
  '-341---6-',
  '--94-8---',
  '7-16--49-',
  '-28-3--4-',
  '39-----25',
  '-7--6-18-',
  '-13--25-4',
  '---3-68--',
  '-8---163-',
];
const current = [
  [0, 0, 0, 0, 2, 0, 0, 0, 0],
  [0, 0, 0, 0, 5, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board puzzle={puzzle} current={current} />

      </div>
    );
  }
}

export default App;
