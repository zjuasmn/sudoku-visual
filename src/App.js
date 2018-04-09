import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import "normalize.css";
import './App.css';
// import Index from "./components/Board/Board";
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
      <Router>
        <Switch>
          <Route exact path='/puzzles' component={PuzzleListPage}/>
        </Switch>
      </Router>

    );
  }
}

export default App;
