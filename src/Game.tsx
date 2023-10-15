import Board from './features/gameboard/components/Board';
import {default as BoardType} from './features/gameboard/types/board';
import useBoard from './features/gameboard/hooks/useBoard';
import MoveHistory from './features/movehistory/components/MoveHistory';
import useCurrentMove from './features/movehistory/hooks/useCurrentMove';
import useHistory from './features/movehistory/hooks/useHistory';

const Game = () => {
  const {history, recordMove} = useHistory();
  const {currentMove, turn, setCurrentMove} = useCurrentMove();
  const {board, makeMove, undoMoves, replayMoves} = useBoard();

  function handlePlay(square: number): BoardType | undefined {
    const nextBoard = makeMove(square, turn);
    if (!nextBoard) {
      return;
    }
    recordMove(square, currentMove);
    setCurrentMove(currentMove + 1);
    return nextBoard;
  }

  function handleHistorySelect(nextMove: number) {
    if (nextMove === currentMove) {
      return;
    }
    if (nextMove < currentMove) {
      const movesToUndo = history.slice(nextMove, currentMove);
      undoMoves(movesToUndo);
      setCurrentMove(currentMove - movesToUndo.length);
    } else {
      const movesToReplay = history.slice(currentMove, nextMove);
      replayMoves(movesToReplay, currentMove);
      setCurrentMove(currentMove + movesToReplay.length);
    }
  }

  return (
    <div className="game">
      <Board board={board} turn={turn} onPlay={handlePlay} />
      <MoveHistory history={history} onHistorySelect={handleHistorySelect} />
    </div>
  );
};

export default Game;
