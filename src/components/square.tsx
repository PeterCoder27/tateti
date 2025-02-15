import React from 'react';

interface SquareProps {
  value: string | null;
  onClick: () => void;
  isWinningSquare: boolean;
}

const Square: React.FC<SquareProps> = ({ value, onClick, isWinningSquare }) => {
  return (
    <button
      className={`square ${isWinningSquare ? 'winning' : ''}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
