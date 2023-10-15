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
