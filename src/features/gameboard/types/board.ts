import {Player} from '../../../common/types/player';

/** Board is a 9-tuple of Square */
type Board = [
  Player | undefined,
  Player | undefined,
  Player | undefined,
  Player | undefined,
  Player | undefined,
  Player | undefined,
  Player | undefined,
  Player | undefined,
  Player | undefined,
];

export function generateEmptyBoard(): Board {
  return Array(9).fill(undefined) as Board;
}

export default Board;
