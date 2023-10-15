import {useState} from 'react';

function useHistory() {
  const [history, setHistory] = useState<number[]>([]);

  const recordMove = (square: number, currentMove: number) => {
    const nextHistory = [...history.slice(0, currentMove), square];
    setHistory(nextHistory);
  };

  return {history, recordMove};
}

export default useHistory;
