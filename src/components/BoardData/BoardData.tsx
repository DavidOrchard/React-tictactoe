// could be a class with board state
export type BoardType = string[][];
export type GameResultType = string | null | undefined;

export const isWinPlayer = (board:BoardType, char:string):boolean => {
  // diagonals
  if(board[0][0] === char && board[1][1] === char && board[2][2] === char) {
    return true;
  }
  if(board[2][0] === char && board[1][1] === char && board[0][2] === char) {
    return true;
  }
  // horizontal
  let found = board.reduce((acc:boolean, row:string[]):boolean => {
    return acc ? acc : ( row[0] === char && row[1] === char && row[2] === char ? true : false);
    }, 
    false);

  if (found) {
    return found;
  }

  // vertical
  for(let i = 0; i < 3; i++) {
    if (board[0][i] === char && board[1][i] === char && board[2][i] === char) {
      found = true;
      break;
    }
  }
  return found;

};
export const isWin = (board:BoardType):GameResultType => {
  if (isWinPlayer(board, "x")) {
    return "x"
  }
  if (isWinPlayer(board, "o")) {
    return "o"
  }
  return null;
};

export const isDrawFunc = (board:BoardType):boolean => 
  !isWin(board) && !board.some((row) => row.indexOf("") > -1);

export const template = [["", "", ""], ["", "", ""], ["", "", ""]];

export const checkMove = (board:BoardType, row:number, col:number, turn:string) => {
    let isValidMove = false;
    if(board[row][col] === "") {
        board[row][col] = turn;
        isValidMove = true;
    }

    return {
      board,
      isValidMove,
      winner: isWin(board),
      isDraw: isDrawFunc(board)
    };
};
