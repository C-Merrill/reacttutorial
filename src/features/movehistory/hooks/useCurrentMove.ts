import {useState} from 'react';
import {Player} from '../../../common/types/player';

function useCurrentMove() {
  const [currentMove, setCurrentMove] = useState(0);

  return {
    currentMove,
    setCurrentMove,
    turn: (currentMove % 2) as Player,
  };
}

export default useCurrentMove;
