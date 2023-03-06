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
    <Card className="commonSlider" elevation={2}>
      <h2 style={{fontWeight:600,fontStyle: 'italic',margin:0}}>${money}</h2>
      <div className="slider">
        <Slider
        aria-label="Temperature"
        min={10}
        value={money}
        defaultValue={money}
        onChange={handleSliderChange}
        sx={{
          color: '#E76F51',
          '& .MuiSlider-thumb': {
            '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
              boxShadow: '0 0 0 8px #E76F5166',
              // Reset on touch devices, it doesn't add specificity
              '@media (hover: none)': {
                boxShadow: "0 0 0 8px #E76F5166",
              },
            },
          }
        }}
        />
      </div>
    </Card>
  )
}