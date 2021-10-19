import React from 'react';
import {buildCellList} from '../utils';

const ActionPanel = (props) => {
  const activeColor = props.activeColor;
  const cellList = props.cellList;
  const setCellList = props.setCellList;

  return <div className="action-panel">
    <button onClick={() => {
      const newCellList = buildCellList();
      setCellList(newCellList);
    }}>Clear All</button>

    <button onClick={() => {
      const newCellList = buildCellList();
      newCellList.forEach(cell => {
        cell.color = activeColor;
      });
      setCellList(newCellList);
    }}>Fill All</button>

    <button onClick={() => {
      const newCellList = buildCellList();
      cellList.forEach((cell, index) => {
        (cell.color === null
        ? newCellList[index].color = activeColor
        : newCellList[index].color = cell.color)
      });
      setCellList(newCellList);
    }}>Fill Empty</button>
  </div>
}

export default ActionPanel;