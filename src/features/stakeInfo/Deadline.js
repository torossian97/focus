import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setDateTo } from './stakeInfoSlice'

import './slider.css';
import Slider from '@mui/material/Slider'

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
    <div className="commonSlider">
      <h2 style={{fontWeight:400,fontStyle: 'italic',margin:0}}>{deadlineWritten}</h2>
      <div className="slider">
        <Slider
        aria-label="Temperature"
        value={deadline}
        defaultValue={deadline}
        onChange={handleSliderChange}
        color="secondary"
        min={dateNow}
        max={dateNow + fiveDays}
        step={halfHour}
        />
      </div>
    </div>
  )
}