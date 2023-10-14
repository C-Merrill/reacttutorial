import {useState} from 'react';

const Square = () => {
  const [value, setValue] = useState<string | undefined>(undefined);

  const handleClick = () => {
    setValue('X');
  };
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
};

export default Square;
