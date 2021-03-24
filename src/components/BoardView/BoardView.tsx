// A separate render func instead of in BoardData.tsx
// The data store for board could be different than the render

import React from 'react';
import styles from './BoardView.module.css';
import { BoardType } from '../BoardData';

export const BoardView = (board:BoardType, tryMove:(row:number, col:number) => void) => (
  <table className={styles.table} aria-label="tic tac toe board">
    <tbody>{board.map((row, rowIndex) => 
    (<tr key={rowIndex} className={styles.row}>{row.map((cell, colIndex) => 
      (<td
        aria-label={`Game square column ${colIndex}, row ${rowIndex}`}
        key={colIndex}
        className={styles.cell}
        onClick={() => tryMove(rowIndex, colIndex)}>{cell}</td>)
      )}
    </tr>
    ))}
    </tbody>
  </table>);

