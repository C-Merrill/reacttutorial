export enum Player {
  X = 0,
  O = 1,
}

export function getPlayerDisplay(t: Player) {
  if (t === Player.X) {
    return 'X';
  } else {
    return 'O';
  }
}
