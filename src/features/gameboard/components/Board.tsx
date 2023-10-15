import {useState} from 'react';
import Square from './Square';
import {Player, getPlayerDisplay} from '../model/player';
import {default as ModelBoard} from '../model/board';
import calculateWinner from '../model/calculateWinner';

const Board = ({
  turn,
  squares,
  onPlay,
}: {
  turn: Player;
  squares: ModelBoard;
  onPlay: (nextSquares: ModelBoard) => void;
}) => {
  const [winner, setWinner] = useState<Player | undefined>(undefined);

  const onSquareClick = (index: number) => {
    if (squares[index] || winner !== undefined) {
      return;
    }
    const nextSquares = [...squares] as ModelBoard;
    nextSquares[index] = turn;
    onPlay(nextSquares);
    setWinner(calculateWinner(nextSquares, index));
  };

  const getStatus = () => {
    if (winner !== undefined) {
      return `Winner: ${getPlayerDisplay(winner)}`;
    } else if (!squares.includes(undefined)) {
      return "Cat's game. Reload";
    } else {
      return `Next player: ${getPlayerDisplay(turn)}`;
    }
  };

  const boardRows: (Player | undefined)[][] = [0, 1, 2].map((rowIndex) => {
    const rowStart = rowIndex * 3;
    return squares.slice(rowStart, rowStart + 3);
  });

  return (
    <>
      <div className="status">{getStatus()}</div>
      {boardRows.map((row, rowIndex) => {
        return (
          <div key={rowIndex} className="board-row">
            {row.map((square, colIndex) => {
              return (
                <Square
                  key={rowIndex * 3 + colIndex}
                  value={square}
                  onSquareClick={() => onSquareClick(rowIndex * 3 + colIndex)}
                />
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default Board;
