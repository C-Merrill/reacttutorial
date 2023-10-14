import {useState} from 'react';
import Square from './Square';
import {Turn, getTurnDisplay} from '../model/turn';

function getRowForIndex(index: number): [number, number, number] {
  const rowStart = Math.floor(index / 3) * 3;
  return [rowStart, rowStart + 1, rowStart + 2];
}

function getColForIndex(index: number): [number, number, number] {
  const colStart = index % 3;
  return [colStart, colStart + 3, colStart + 6];
}

function getDiagsForIndex(index: number): [number, number, number][] {
  const possibleDiags: [number, number, number][] = [
    [0, 4, 8],
    [2, 4, 6],
  ];
  return possibleDiags.filter((diag) => diag.includes(index));
}

const calculateWinner = (
  squares: (Turn | undefined)[],
  indexOfMove: number,
): Turn | undefined => {
  const linesToCheck = [
    ...getDiagsForIndex(indexOfMove),
    getColForIndex(indexOfMove),
    getRowForIndex(indexOfMove),
  ];

  for (let i = 0; i < linesToCheck.length; i++) {
    const [a, b, c] = linesToCheck[i];
    if (
      squares[a] !== undefined &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }
};

const Board = () => {
  const [turn, setTurn] = useState<Turn>(Turn.X);
  const [squares, setSquares] = useState(
    Array<Turn | undefined>(9).fill(undefined),
  );
  const [winner, setWinner] = useState<Turn | undefined>(undefined);

  const onSquareClick = (index: number) => {
    if (squares[index] || winner !== undefined) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[index] = turn;
    setSquares(nextSquares);
    setWinner(calculateWinner(nextSquares, index));
    setTurn(turn ^ 1);
  };

  const getStatus = () => {
    if (winner !== undefined) {
      return `Winner: ${getTurnDisplay(winner)}`;
    } else {
      return `Next player: ${getTurnDisplay(turn)}`;
    }
  };

  return (
    <>
      <div className="status">{getStatus()}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => onSquareClick(0)} />
        <Square value={squares[1]} onSquareClick={() => onSquareClick(1)} />
        <Square value={squares[2]} onSquareClick={() => onSquareClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => onSquareClick(3)} />
        <Square value={squares[4]} onSquareClick={() => onSquareClick(4)} />
        <Square value={squares[5]} onSquareClick={() => onSquareClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => onSquareClick(6)} />
        <Square value={squares[7]} onSquareClick={() => onSquareClick(7)} />
        <Square value={squares[8]} onSquareClick={() => onSquareClick(8)} />
      </div>
    </>
  );
};

export default Board;
