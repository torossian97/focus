import React from 'react'
import './taskTitle.css'
import { useSelector, useDispatch } from 'react-redux'
import { TextField } from '@mui/material';
import { setTitleTo } from './taskInfoSlice'

export default function TaskTitle() {
  const taskTitle = useSelector(state => state.taskInfo.taskTitle)
  const dispatch = useDispatch()

  const handleInputChange = (event) => {
    dispatch(setTitleTo(event.target.value));
  };

  return (
    <div className="tasktitle">
      <TextField className="titleInput"
        fullWidth
        id="outlined-basic"
        label="Task Title"
        variant="outlined"
        onChange={handleInputChange}/>
    </div>
  )
}