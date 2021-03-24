import React, { useCallback, useMemo, useState } from 'react';
import { template, checkMove } from './components/BoardData';
import { BoardView } from './components/BoardView';

// Build a tic-tac-toe game. 

// The requirements are:
// * Turns alternate between X and O.
// * The state of the board is shown after each turn.
// * A message is printed when someone wins.

// A win is 3 in a row, any row/column, or diagonal.

function App() {

  // The view model is in state in 4 separate pieces
  // A bit cumbersome.
  // Alternatives:
  // 1. single object/class with all 4 state pieces
  // 2. context
  // 3. expose winner, isDraw as functions on board
  
  // copy the template so each render of the app gets a new copy
  const initialBoard = useMemo(() => JSON.parse(JSON.stringify(template)), []);
  const [board, setBoard] = useState(initialBoard);
  const [turn, setTurn] = useState("o");
  const [winner, setWinner] = useState("");
  const [isDraw, setIsDraw] = useState(false);

  // possibly premature optimization as moves aren't re-used
  const handleMove = useCallback(
    (row:number, col:number) => {
      const {
        board:newBoard,
        isValidMove,
        winner,
        isDraw
      } = checkMove(board, row, col, turn)
      if(isValidMove) {
        setBoard(newBoard);
        setTurn(turn === "o" ? "x" : "o");
        if(winner) {
          setWinner(winner);
        }
        if(isDraw) {
          setIsDraw(isDraw);
        }
      }
    },
    [board, turn]
  );

  return (
    <div className="App">
      <h2>Awesomesauce!</h2>
      {BoardView(board, winner ? () => {} : handleMove)}
      {!winner && !isDraw && <div>It's {turn}'s turn</div>}
      {winner && <div>{winner} has won</div>}
      {isDraw && <div>Draw pardner</div>}
    </div>
  );
}

export default App;
