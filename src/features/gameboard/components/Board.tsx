import {useState} from 'react';
import Square from './Square';

enum Turn {
  O = 0,
  X = 1,
}

const Board = () => {
  const [turn, setTurn] = useState<Turn>(Turn.X);
  const [squares, setSquares] = useState(
    Array<string | undefined>(9).fill(undefined),
  );

  const onSquareClick = (index: number) => {
    if (squares[index]) {
      return;
    }
    const nextSquares = squares.slice();
    if (turn === Turn.X) {
      nextSquares[index] = 'X';
    } else {
      nextSquares[index] = 'O';
    }
    setSquares(nextSquares);
    setTurn(turn ^ 1);
  };

  return (
    <>
      <div className="board-row">
        <Square value={squares[1]} onSquareClick={() => onSquareClick(1)} />
        <Square value={squares[2]} onSquareClick={() => onSquareClick(2)} />
        <Square value={squares[3]} onSquareClick={() => onSquareClick(3)} />
      </div>
      <div className="board-row">
        <Square value={squares[4]} onSquareClick={() => onSquareClick(4)} />
        <Square value={squares[5]} onSquareClick={() => onSquareClick(5)} />
        <Square value={squares[6]} onSquareClick={() => onSquareClick(6)} />
      </div>
      <div className="board-row">
        <Square value={squares[7]} onSquareClick={() => onSquareClick(7)} />
        <Square value={squares[8]} onSquareClick={() => onSquareClick(8)} />
        <Square value={squares[9]} onSquareClick={() => onSquareClick(9)} />
      </div>
    </>
  );
};

export default Board;
