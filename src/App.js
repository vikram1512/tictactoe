import React, { useState } from 'react';
import Board from './components/Board';
import Reload from './components/Reload';
import { calculateWinner } from './helpers';

import './styles/root.scss';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);
  const [count, setCount] = useState(0);
  const winner = calculateWinner(board);
  const message = winner
    ? `Winner is ${winner}`
    : count < 9
    ? `Next player is ${isXNext ? 'X' : 'O'}`
    : 'Game Over, Click Replay to Play Again';

  const handleSquareClick = position => {
    if (board[position] || winner) {
      return;
    }

    setBoard(prev => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXNext ? 'X' : 'O';
        }

        return square;
      });
    });
    setCount(prev => prev + 1);
    setIsXNext(prev => !prev);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
      <Reload />
    </div>
  );
};

export default App;
