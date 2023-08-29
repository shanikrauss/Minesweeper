function Cell({cellOpen, cellValue, cellCoordinates, handleClick, handleRightClick}){
  const handleOnClick = () => {
    handleClick(cellOpen, cellValue, cellCoordinates);
  }

  const handleOnRightClick = () => {
    handleRightClick(cellCoordinates);
  }

  return(
      <div>
        <button className={cellOpen ? `open` : "closed"} onClick={handleOnClick} onRightClick={handleOnRightClick}>{cellValue}</button>
      </div>
  )
}

export default Cell;