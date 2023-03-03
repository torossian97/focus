import React from 'react'
import './tasks.css'
import { useSelector, useDispatch } from 'react-redux'
import { TextField } from '@mui/material';
import { setWritingSummaryTo, setWordCountTo } from '../taskInfoSlice'

export default function WritingTask() {
  const writingSummary = useSelector(state => state.taskInfo.writingSummary)
  const dispatch = useDispatch()

  const handleWordCountChange = (event) => {
    dispatch(setWordCountTo(event.target.value));
  };
  const handleSummaryChange = (event) => {
    dispatch(setWritingSummaryTo(event.target.value));
  };

  return (
    <div className="task">
      <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}/>
      <TextField
        id="outlined-multiline-static"
        label="Multiline"
        multiline
        rows={4}
        defaultValue="Default Value"
        onChange={handleSummaryChange}
        />
    </div>
  )
}