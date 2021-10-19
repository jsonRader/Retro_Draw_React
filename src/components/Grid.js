import React from 'react';
import Cell from './Cell';

const Grid = (props) => {
  const activeColor = props.activeColor;
  const cellList = props.cellList;
  const setCellList = props.setCellList;

  return <div className="grid">{
    cellList.map((cell, index) => 
      <Cell 
        key={`grid-${index}`}
        color={cell.color}
        handleClick={() => {
          const cellListCopy = [...cellList];
          cellListCopy[index].color = activeColor;
          setCellList(cellListCopy);
        }}
      />
    )
  }</div>
}

export default Grid;