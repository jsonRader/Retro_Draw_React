import React, { useState, useEffect } from 'react';
import Header from './Header';
import Palette from './Palette';
import Grid from './Grid';
import ActionPanel from './ActionPanel';
import {COLORS, buildCellList} from '../utils';

const getCellListFromLocal = () => {
  let cellList = JSON.parse(localStorage.getItem('cellList'))

  if(cellList) {
    return cellList;
  }
  return buildCellList();
}

const setCellListOnLocal = (cellList) => {
  localStorage.setItem('cellList', JSON.stringify(cellList))
}

const App = () => {
  const [activeColor, setActiveColor] = useState(COLORS[0]);
  const [cellList, _setCellList] = useState(buildCellList([]));

  const setCellList = (newCellList) => {
    setCellListOnLocal(newCellList)
    _setCellList(newCellList)
  }

  useEffect(() => {
    setCellList(getCellListFromLocal());
  }, [])

  return <div className="app">
    <Header />
    <Palette 
      activeColor={activeColor}
      setActiveColor={setActiveColor}
    />
    <Grid 
      activeColor={activeColor}
      cellList={cellList}
      setCellList={setCellList}
    />
    <ActionPanel 
      activeColor={activeColor}
      cellList={cellList}
      setCellList={setCellList}
    />
  </div>
}

export default App;