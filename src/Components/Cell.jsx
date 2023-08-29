function Cell({cellOpen, cellValue, cellCoordinates, handleClick}){
  function handleOnClick(){
    handleClick(cellOpen, cellValue, cellCoordinates);
  }

  return(
      <div>
        <button className={cellOpen ? `open ${cellValue}` : "closed"} onClick={handleOnClick} />
      </div>
  )
}

export default Cell;