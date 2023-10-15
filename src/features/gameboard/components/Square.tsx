import {Player, getPlayerDisplay} from '../model/player';

const Square = ({
  value,
  onSquareClick,
}: {
  value: Player | undefined;
  onSquareClick: () => void;
}) => {
  const displayValue = (value: Player | undefined): string => {
    if (value !== undefined) {
      return getPlayerDisplay(value);
    }
    return '';
  };

  return (
    <button className="square" onClick={onSquareClick}>
      {displayValue(value)}
    </button>
  );
};

export default Square;
