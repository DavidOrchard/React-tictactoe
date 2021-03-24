
import { BoardType, GameResultType, isWin } from './BoardData';

const tc1:BoardType = [["x", "", ""],
["", "x", ""],
["", "", "x"]];
const tc2 = [["", "", "x"],
["", "x", ""],
["x", "", ""]];
const tc3 = [["", "x", ""],
["", "x", ""],
["x", "", ""]];

const tc4 = [["x", "x", "x"],
["", "", ""],
["", "", ""]];

const tc5 = [["x", "", ""],
["x", "", ""],
["x", "", ""]];

const tc6 = [["", "", "x"],
["", "", "x"],
["", "", "x"]];

const tc7 = [["", "", "o"],
["", "", "o"],
["", "", "o"]];

// need to add annotation to explain first elem is BoardType not []
const testCases: [BoardType, GameResultType][] = [
  [tc1, "x"],
  [tc2, "x"],
  [tc3, null],
  [tc4, "x"],
  [tc5, "x"],
  [tc6, "x"],
  [tc7, "o"]
];

test.each(testCases)(
  'validates x wins',
  (board:BoardType, expected:GameResultType) => {
    expect(isWin(board)).toBe(expected);
  }
);
