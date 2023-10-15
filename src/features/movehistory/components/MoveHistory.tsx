const MoveHistory = ({
  history,
  onHistorySelect,
}: {
  history: number[];
  onHistorySelect: (nextMove: number) => void;
}) => {
  const moves = [...history, 'next'].map((squares, move) => {
    const description = move > 0 ? 'Go to move #' + move : 'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => onHistorySelect(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game-info">
      <ol>{moves}</ol>
    </div>
  );
};

export default MoveHistory;
