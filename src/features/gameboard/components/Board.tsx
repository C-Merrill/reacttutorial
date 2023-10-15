import Square from './Square';
import Status from './Status';
import useWinner from '../hooks/useWinner';
import {Player} from '../../../common/types/player';
import {default as BoardType} from '../types/board';

const Board = ({
  board,
  turn,
  onPlay,
}: {
  board: BoardType;
  turn: Player;
  onPlay: (square: number) => BoardType | undefined;
}) => {
  const {winner, calculateWinner} = useWinner();

  const onSquareClick = (index: number) => {
    if (winner !== undefined) {
      return;
    }
    const nextBoard = onPlay(index);
    if (!nextBoard) {
      return;
    }
    calculateWinner(nextBoard, index);
  };

  return (
    <div className="game-board">
      <Status turn={turn} board={board} winner={winner} />
      {[0, 1, 2].map((rowIndex) => {
        const rowStart = rowIndex * 3;
        return (
          <div key={rowIndex} className="board-row">
            {board.slice(rowStart, rowStart + 3).map((square, colIndex) => {
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
    </div>
  );
};

export default Board;
