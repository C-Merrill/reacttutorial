import {Turn, getTurnDisplay} from '../model/turn';

const Square = ({
  value,
  onSquareClick,
}: {
  value: Turn | undefined;
  onSquareClick: () => void;
}) => {
  const displayValue = (value: Turn | undefined): string => {
    if (value !== undefined) {
      return getTurnDisplay(value);
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
