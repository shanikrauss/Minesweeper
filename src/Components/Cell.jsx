function Cell({cellOpen, cellValue, cellCoordinates, handleClick, handleRightClick}){
  const handleOnClick = () => {
    handleClick(cellOpen, cellValue, cellCoordinates);
  }

  const handleOnRightClick = () => {
    handleRightClick(cellCoordinates);
  }

  return(
      <div>
        <button className={cellOpen ? `open ${cellValue}` : "closed"} onClick={handleOnClick} onRightClick={handleOnRightClick}/>
      </div>
  )
}

export default Cell;