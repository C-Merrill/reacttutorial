import {useState} from 'react';
import {Player} from '../model/player';
import {default as ModelBoard, generateEmptyBoard} from '../model/board';
import Board from './Board';

const Game = () => {
  const [turn, setTurn] = useState<Player>(Player.X);
  const [history, setHistory] = useState<ModelBoard[]>([generateEmptyBoard()]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares: ModelBoard) {
    setHistory([...history, nextSquares]);
    setTurn(turn ^ 1);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board turn={turn} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
};

export default Game;
