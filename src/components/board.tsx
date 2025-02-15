import React, { useState } from 'react';
import Square from './square';

const Board: React.FC = () => {
  const [squares, setSquares] = useState<Array<string | null>>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const [winningLine, setWinningLine] = useState<number[] | null>(null);

  const handleClick = (i: number) => {
    if (squares[i] || winningLine) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = isXNext ? 'X' : 'O';
    setSquares(nextSquares);
    setIsXNext(!isXNext);
    const line = calculateWinner(nextSquares);
    if (line) {
      setWinningLine(line);
    }
  };

  const calculateWinner = (squares: Array<string | null>) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return lines[i];
      }
    }
    return null;
  };

  const renderSquare = (i: number) => {
    const isWinningSquare = winningLine ? winningLine.includes(i) : false;
    return (
      <Square
        value={squares[i]}
        onClick={() => handleClick(i)}
        isWinningSquare={isWinningSquare}
      />
    );
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setWinningLine(null);
  };

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      {winningLine && (
        <div className="winner-message">
          <span className="neon-text">¡Ganador: {isXNext ? 'O' : 'X'}!</span>
        </div>
      )}
      <button className="reset-button" onClick={resetGame}>
        Reiniciar Juego
      </button>
    </div>
  );
};

export default Board;
