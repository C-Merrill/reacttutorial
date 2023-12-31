import {useState} from 'react';
import {Player} from '../../../common/types/player';

function getRowForIndex(index: number): [number, number, number] {
  const rowStart = Math.floor(index / 3) * 3;
  return [rowStart, rowStart + 1, rowStart + 2];
}

function getColForIndex(index: number): [number, number, number] {
  const colStart = index % 3;
  return [colStart, colStart + 3, colStart + 6];
}

function getDiagsForIndex(index: number): [number, number, number][] {
  const possibleDiags: [number, number, number][] = [
    [0, 4, 8],
    [2, 4, 6],
  ];
  return possibleDiags.filter((diag) => diag.includes(index));
}

function useWinner() {
  const [winner, setWinner] = useState<Player | undefined>(undefined);

  const calculateWinner = (
    squares: (Player | undefined)[],
    indexOfMove: number,
  ): void => {
    const linesToCheck = [
      ...getDiagsForIndex(indexOfMove),
      getColForIndex(indexOfMove),
      getRowForIndex(indexOfMove),
    ];

    for (let i = 0; i < linesToCheck.length; i++) {
      const [a, b, c] = linesToCheck[i];
      if (
        squares[a] !== undefined &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        setWinner(squares[a]);
      }
    }
  };

  const resetWinner = () => {
    setWinner(undefined);
  };

  return {winner, calculateWinner, resetWinner};
}

export default useWinner;
