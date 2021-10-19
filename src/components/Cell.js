import React from 'react';

const Cell = (props) => {
  const color = props.color;
  const isActive = props.isActive;
  const handleClick = props.handleClick;

  return <div 
      className={isActive 
        ? "cell active" 
        : "cell"
      }
      style={{"backgroundColor":color}}
      onClick={handleClick}>
  </div>
}

export default Cell;