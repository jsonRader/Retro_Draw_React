import React from 'react';
import Cell from './Cell';
import {COLORS} from '../utils';

const Palette = (props) => {
  const activeColor = props.activeColor;
  const setActiveColor = props.setActiveColor;

  return <div className="palette">{
    COLORS.map((color, index) => {
      return <Cell
        key={`palette-${index}`}
        color={color}
        isActive={color===activeColor ? true : false}
        handleClick={() => {setActiveColor(color)}}
      />})
  }</div>
}

export default Palette;