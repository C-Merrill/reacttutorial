import Board from './features/gameboard/components/Board';
import {default as BoardType} from './features/gameboard/types/board';
import useBoard from './features/gameboard/hooks/useBoard';
import MoveHistory from './features/movehistory/components/MoveHistory';
import useCurrentMove from './features/movehistory/hooks/useCurrentMove';
import useHistory from './features/movehistory/hooks/useHistory';
import useWinner from './features/gameboard/hooks/useWinner';

const Game = () => {
  const {history, recordMove} = useHistory();
  const {currentMove, turn, setCurrentMove} = useCurrentMove();
  const {board, makeMove, undoMoves, replayMoves} = useBoard();
  const {winner, calculateWinner, resetWinner} = useWinner();

  function handlePlay(square: number): BoardType | undefined {
    if (winner !== undefined) {
      return;
    }
    const nextBoard = makeMove(square, turn);
    if (!nextBoard) {
      return;
    }
    recordMove(square, currentMove);
    setCurrentMove(currentMove + 1);
    calculateWinner(nextBoard, square);
  }

  function handleHistorySelect(nextMove: number) {
    if (nextMove === currentMove) {
      return;
    }
    if (nextMove < currentMove) {
      const movesToUndo = history.slice(nextMove, currentMove);
      undoMoves(movesToUndo);
      setCurrentMove(currentMove - movesToUndo.length);
      resetWinner();
    } else {
      const movesToReplay = history.slice(currentMove, nextMove);
      const nextBoard = replayMoves(movesToReplay, currentMove);
      setCurrentMove(currentMove + movesToReplay.length);
      calculateWinner(nextBoard, movesToReplay[movesToReplay.length - 1]);
    }
  }

  return (
    <div className="game">
      <Board board={board} turn={turn} winner={winner} onPlay={handlePlay} />
      <MoveHistory history={history} onHistorySelect={handleHistorySelect} />
    </div>
  );
};

export default Game;
