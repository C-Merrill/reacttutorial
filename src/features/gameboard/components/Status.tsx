import {Player, getPlayerDisplay} from '../../../common/types/player';
import Board from '../types/board';

const Status = ({
  board,
  turn,
  winner,
}: {
  board: Board;
  turn: Player;
  winner: Player | undefined;
}) => {
  const getStatus = () => {
    if (winner !== undefined) {
      return `Winner: ${getPlayerDisplay(winner)}`;
    } else if (!board.includes(undefined)) {
      return "Cat's game. Reload";
    } else {
      return `Next player: ${getPlayerDisplay(turn)}`;
    }
  };

  return <div className="status">{getStatus()}</div>;
};

export default Status;
