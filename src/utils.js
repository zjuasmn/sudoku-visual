import { range9, Types } from "./const";

export function stringToPuzzle(s) {
  const arr = s.split('\n');
  if (arr.length !== 9) {
    throw new Error(`String should has 9 lines, got ${arr.length} lines.`);
  }
  const puzzle = [];
  for (let i = 0; i < 9; ++i) {
    puzzle.push([]);
    if (arr[i].length !== 9) {
      throw new Error(`Line ${i} should has 9 letters, got ${arr[i].length} letters.`);
    }
    for (let j = 0; j < 9; ++j) {
      if (/\d/.test(arr[i][j])) {
        puzzle[i].push(Number(arr[i][j]));
      } else {
        throw new Error(`Letter ${j} in line ${i} should be digit, got ${arr[i][j]}`);
      }
    }
  }
  return puzzle;
}

export function puzzleToString(puzzle) {
  return range9.map(i => range9.map(j => puzzle[i][j].toString()).join('')).join('\n');
}

export function blockIndex(row, col) {
  return Math.floor(row / 3) * 3 + Math.floor(col / 3);
}

export function xInfo(xIndex) {
  return {
    type: [Types.CELL, Types.ROW, Types.COL, Types.BLOCK][Math.floor(xIndex / 81)],
    index: xIndex % 81,
  }
}