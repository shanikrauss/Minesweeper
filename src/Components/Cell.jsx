function Cell({cellOpen, cellValue, cellCoordinates, handleClick, handleRightClick}){
  function handleOnClick(){
    handleClick(cellOpen, cellValue, cellCoordinates);
  }

  function handleOnRightClick(){
    handleRightClick(cellCoordinates);
  }

  return(
      <div>
        <button className={cellOpen ? `open ${cellValue}` : "closed"} onClick={handleOnClick} onRightClick={handleOnRightClick}/>
      </div>
  )
}

export default Cell;