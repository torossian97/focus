import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setDateTo } from './stakeInfoSlice'

import './slider.css';
import { Slider, Card } from '@mui/material'
import stopwatch from '../../assets/stopwatch.png';

export default function Deadline() {
  const deadline = useSelector(state => state.stakeInfo.date)
  const deadlineWritten = useSelector(state => state.stakeInfo.dateWritten)
  const dispatch = useDispatch()

  const handleSliderChange = (event, newValue) => {
      dispatch(setDateTo(newValue));
  };

  var dateNow = Date.now()
  // round to nearest half hour, minimum 30 minutes away
  if((dateNow % 3600000) < 1800000){
    dateNow = dateNow - (dateNow % 3600000);
    dateNow = dateNow + 3600000;
  }else{
    dateNow = dateNow - (dateNow % 3600000);
    dateNow = dateNow + 3600000 + 1800000;
  }
  const fiveDays = 7200*60*1000;
  const halfHour = 30*60*1000;

  return (
    <Card
      elevation={2}
      className="commonSlider"
    >
      <h4 style={{fontWeight:600,fontStyle: 'italic',margin:0}}>{deadlineWritten}</h4>
      <div className="slider">
        <Slider
        aria-label="input-slider"
        value={deadline}
        defaultValue={deadline}
        onChange={handleSliderChange}
        onChangeCommitted={handleSliderChange}
        min={dateNow}
        max={dateNow + fiveDays}
        step={halfHour}
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