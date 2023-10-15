export enum Player {
  O = 0,
  X = 1,
}

export function getPlayerDisplay(t: Player) {
  if (t === Player.X) {
    return 'X';
  } else {
    return 'O';
  }
}
