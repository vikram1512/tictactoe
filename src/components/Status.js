import React from 'react';

const Status = ({ winner, board, isXnext }) => {
  const moves = board.every(el => el !== null);
  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner && !moves && `Next Player is ${isXnext ? 'X' : 'O'}`}
      {!winner && moves && 'Game Tied'}
    </h2>
  );
};

export default Status;
