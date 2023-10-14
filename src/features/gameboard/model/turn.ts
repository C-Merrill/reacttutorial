export enum Turn {
  O = 0,
  X = 1,
}

export function getTurnDisplay(t: Turn) {
  if (t === Turn.X) {
    return 'X';
  } else {
    return 'O';
  }
}
