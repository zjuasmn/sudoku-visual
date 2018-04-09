import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import StepIcon from "../components/StepIcon";
import { range9, Types } from "../const";
import StepState from "../components/StepState";
import StepList from "../components/StepList";
import InputBoard from "../components/InputBoard";
import PuzzleList from '../components/PuzzleList'
import StepBoard from "../components/StepBoard";

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')}/>);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('StepIcon', module)
  .add('row', () => <StepIcon type={'ROW'} index={4 * 9 + 3}/>)
  .add('col', () => <StepIcon type={'COL'} index={7 * 9 + 2}/>)
  .add('block', () => <StepIcon type={'BLOCK'} index={3 * 9 + 2}/>)
  .add('cell', () => <StepIcon type={'CELL'} index={4 * 9 + 2}/>)
storiesOf('StepState', module)
  .add('row', () => <StepState type={Types.ROW}/>)
  .add('cell', () => <StepState type={Types.CELL} state={1} visit={2}/>)

storiesOf('StepList', module)
  .add('default', () => <StepList steps={[
    { type: Types.ROW, index: 7 * 9 + 3, },
    { type: Types.CELL, index: 7 * 9 + 3, },
  ]}/>)

storiesOf('InputBoard', module)
  .add('default', () => <InputBoard
    puzzle={[[0, 9, 4, 0, 8, 0, 0, 2, 0],
      [0, 6, 0, 0, 0, 7, 0, 0, 0],
      [7, 0, 0, 0, 0, 0, 7, 0, 3],
      [4, 3, 0, 0, 5, 0, 9, 0, 0],
      [0, 2, 0, 0, 0, 5, 0, 1, 0],
      [0, 0, 6, 0, 9, 0, 0, 3, 4],
      [6, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 7, 0, 0, 0, 5, 0],
      [0, 8, 0, 0, 3, 0, 6, 9, 0]]}
    onChange={action('click')}
  />)

storiesOf('PuzzleList', module)
  .add('default', () => <PuzzleList
    puzzles={range9.map(() => [[0, 9, 4, 0, 8, 0, 0, 2, 0],
      [0, 6, 0, 0, 0, 7, 0, 0, 0],
      [7, 0, 0, 0, 0, 0, 0, 0, 3],
      [4, 3, 0, 0, 5, 0, 9, 0, 0],
      [0, 2, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 6, 0, 9, 0, 0, 3, 4],
      [6, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 7, 0, 0, 0, 5, 0],
      [0, 8, 0, 0, 3, 0, 6, 9, 0]])}
    onSelect={action('select')}
  />)

storiesOf('StepBoard', module)
  .add('default', () => <StepBoard
    puzzle={[[0, 9, 4, 0, 8, 0, 0, 2, 0],
      [0, 6, 0, 0, 0, 7, 0, 0, 0],
      [7, 0, 0, 0, 0, 0, 0, 0, 3],
      [4, 3, 0, 0, 5, 0, 9, 0, 0],
      [0, 2, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 6, 0, 9, 0, 0, 3, 4],
      [6, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 7, 0, 0, 0, 5, 0],
      [0, 8, 0, 0, 3, 0, 6, 9, 0]]}
    steps={[[0, 0, 2], [2, 3, 1]]}
  />)