import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setMoneyTo } from './stakeInfoSlice'

import './slider.css';
import { Slider, Card } from '@mui/material'

export default function Money() {
  const money = useSelector(state => state.stakeInfo.money)
  const dispatch = useDispatch()

  const handleSliderChange = (event, newValue) => {
      dispatch(setMoneyTo(newValue));
  };

  return (
    <Card className="commonSlider" elevation={3}>
      <h2 style={{fontWeight:600,fontStyle: 'italic',margin:0}}>${money}</h2>
      <div className="slider">
        <Slider
        aria-label="Temperature"
        value={money}
        defaultValue={money}
        onChange={handleSliderChange}
        color="secondary"
        />
      </div>
    </Card>
  )
}