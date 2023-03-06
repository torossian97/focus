import React from 'react'
import './dropDown.css'
import './taskSelector.css'
import { useSelector, useDispatch } from 'react-redux'
import { Select, MenuItem, InputLabel} from '@mui/material';
import { setTaskTo } from './taskInfoSlice'

export default function TaskTitle() {
  const taskWritten = useSelector(state => state.taskInfo.task)
  const dispatch = useDispatch()

  const handleUsageChange = (event) => {
    dispatch(setTaskTo(event.target.value));
  };

  return (
    <div className="scrolling-wrapper-flexbox">
      <InputLabel id="usage-select-label"></InputLabel>
      <Select
        className="dropdown"
        labelId="usage-select-label"
        id="usage-select"
        value={taskWritten}
        onChange={handleUsageChange}
      >
          <MenuItem value={0}>✍️ write</MenuItem>
          <MenuItem value={1}>📓 study</MenuItem>
          <MenuItem value={2}>💻 program</MenuItem>
          <MenuItem value={3}>🎥 video edit</MenuItem>
          <MenuItem value={4}>🎨 design</MenuItem>
      </Select>
    </div>
  )
}