const Square = ({value}: {value: string}) => {
  function handleClick() {
    console.log('clicked!');
  }
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
};

export default Square;
