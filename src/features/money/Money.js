import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTo } from './moneySlice'

import './money.css';
import Slider from '@mui/material/Slider'

export default function Money() {
  const money = useSelector(state => state.money.value)
  const dispatch = useDispatch()

  const handleSliderChange = (event, newValue) => {
      dispatch(setTo(newValue));
  };

  return (
    <div className="moneySlider">
      <h2 style={{fontWeight:400,fontStyle: 'italic',margin:0}}>${money}</h2>
      <div className="slider">
        <Slider
        aria-label="Temperature"
        value={money}
        defaultValue={money}
        onChange={handleSliderChange}
        color="secondary"
        />
      </div>
    </div>
  )
}