import {useState} from 'react';
import {Player} from '../model/player';
import {default as ModelBoard, generateEmptyBoard} from '../model/board';
import Board from './Board';

const Game = () => {
  //   const [turn, setTurn] = useState<Player>(Player.X);
  const [history, setHistory] = useState<ModelBoard[]>([generateEmptyBoard()]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const turn: Player = currentMove % 2;

  function handlePlay(nextSquares: ModelBoard) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(currentMove + 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    const description = move > 0 ? 'Go to move #' + move : 'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board turn={turn} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
