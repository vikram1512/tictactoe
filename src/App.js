import React, { useState } from 'react';
import Board from './components/Board';
import Status from './components/Status';
import { calculateWinner } from './helpers';

import './styles/root.scss';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);
  const { winner, winningSquares } = calculateWinner(board);

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

    setIsXNext(prev => !prev);
  };

  const newGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(false);
  };

  return (
    <div className="app">
      <h1>
        TIC <span className="text-green">TAC</span> TOE
      </h1>
      <Status winner={winner} board={board} isXnext={isXNext} />
      <Board
        board={board}
        handleSquareClick={handleSquareClick}
        winningSquares={winningSquares}
      />
      <button
        type="button"
        className={`btn-reset ${winner ? 'active' : ''}`}
        onClick={newGame}
      >
        New Game
      </button>
    </div>
  );
};

export default App;
