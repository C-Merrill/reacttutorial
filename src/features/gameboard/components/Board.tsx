import Square from './Square';
import Status from './Status';
import {Player} from '../../../common/types/player';
import {default as BoardType} from '../types/board';

const Board = ({
  board,
  turn,
  winner,
  onPlay,
}: {
  board: BoardType;
  turn: Player;
  winner: Player | undefined;
  onPlay: (square: number) => BoardType | undefined;
}) => {
  return (
    <div className="game-board">
      <Status turn={turn} board={board} winner={winner} />
      {[...Array(3).keys()].map((rowIndex) => {
        const rowStart = rowIndex * 3;
        return (
          <div key={rowIndex} className="board-row">
            {board.slice(rowStart, rowStart + 3).map((square, colIndex) => {
              return (
                <Square
                  key={rowIndex * 3 + colIndex}
                  value={square}
                  onSquareClick={() => onPlay(rowIndex * 3 + colIndex)}
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
