import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTo } from './deadlineSlice'

import './deadline.css';
import Slider from '@mui/material/Slider'

export default function Deadline() {
  const deadline = useSelector(state => state.deadline.value)
  const deadlineWritten = useSelector(state => state.deadline.written)
  const dispatch = useDispatch()

  const handleSliderChange = (event, newValue) => {
      dispatch(setTo(newValue));
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
    <div className="deadlineSlider">
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