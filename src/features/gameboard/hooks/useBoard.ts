import {useState} from 'react';
import Board, {generateEmptyBoard} from '../types/board';
import {Player} from '../../../common/types/player';

function useBoard() {
  const [board, setBoard] = useState<Board>(generateEmptyBoard);

  const makeMove = (square: number, player: Player) => {
    if (board[square] !== undefined) {
      return;
    }
    const nextBoard = [...board] as Board;
    nextBoard[square] = player;
    setBoard(nextBoard);
    return nextBoard;
  };

  const undoMoves = (moves: number[]) => {
    const nextBoard = [...board] as Board;
    moves.forEach((move) => {
      nextBoard[move] = undefined;
    });
    setBoard(nextBoard);
  };

  const replayMoves = (moves: number[], currentMove: number): Board => {
    const nextBoard = [...board] as Board;
    moves.forEach((move, index) => {
      nextBoard[move] = (index + currentMove) % 2;
    });
    setBoard(nextBoard);
    return nextBoard;
  };

  return {board, makeMove, undoMoves, replayMoves};
}

export default useBoard;
