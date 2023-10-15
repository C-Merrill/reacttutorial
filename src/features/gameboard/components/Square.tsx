import {Player, getPlayerDisplay} from '../../../common/types/player';

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
