import React from 'react'
import './tasks.css'
import { useSelector, useDispatch } from 'react-redux'
import { TextField, Slider } from '@mui/material';
import { setWritingSummaryTo, setWordCountTo, setVideoLengthTo,
  setVcUsernameTo, setProgrammingSummaryTo } from '../taskInfoSlice'

export default function Tasks() {
  const task = useSelector(state => state.taskInfo.task)
  const videoLength = useSelector(state => state.taskInfo.videoLength)
  const dispatch = useDispatch()

  const handleWordCountChange = (event) => {
    dispatch(setWordCountTo(event.target.value));
  };
  const handleSummaryChange = (event) => {
    dispatch(setWritingSummaryTo(event.target.value));
  };
  const handleVcUsernameChange = (event, newValue) => {
    dispatch(setVcUsernameTo(newValue));
  };
  const handleProgrammingSummaryChange = (event, newValue) => {
    dispatch(setProgrammingSummaryTo(newValue));
  };
  const handleSliderChange = (event, newValue) => {
    dispatch(setVideoLengthTo(newValue));
  };

  return (
    <div className="taskContainer">
      <div className={task == 0 ? "task activeTask" : "task"}>
        <TextField className="inputBoxes"
          fullWidth
          id="outlined-basic"
          label="Min. word count"
          variant="outlined"
          onChange={handleWordCountChange}/>
        <TextField className="inputBoxes"
          id="outlined-multiline-static"
          label="Summary"
          multiline
          rows={4}
          defaultValue="A brief summary of what you're going to write about!"
          onChange={handleSummaryChange}
          />
      </div>
      <div className={task == 1 ? "task activeTask" : "task"}>
        <TextField className="inputBoxes"
          fullWidth
          id="outlined-basic"
          label="Min. word count"
          variant="outlined"
          onChange={handleWordCountChange}/>
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="A brief summary of what your x is going to be about!"
          onChange={handleSummaryChange}
          />
      </div>
      <div className={task == 2 ? "task activeTask" : "task"}>
        <TextField className="inputBoxes"
          fullWidth
          id="outlined-basic"
          label="Github/lab username"
          variant="outlined"
          onChange={handleVcUsernameChange}/>
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="A brief summary of what your PRs will be (think commit message)."
          onChange={handleProgrammingSummaryChange}
          />
      </div>
      <div className={task == 3 ? "task activeTask" : "task"}>
      <div className="taskSlider">
        <h6 style={{fontWeight:800,fontStyle: 'italic',margin:0}}>minimum length: </h6>
        <h6 style={{fontWeight:400,fontStyle: 'italic',margin:0}}>{videoLength} minute(s)</h6>
        <div className="slider">
          <Slider
          aria-label="Temperature"
          value={videoLength}
          defaultValue={videoLength}
          onChange={handleSliderChange}
          min={1}
          step={1}
          max={60}
          color="secondary"
          />
        </div>
      </div>
        <TextField
          id="outlined-multiline-static"
          label="Summary"
          multiline
          rows={4}
          defaultValue="A brief summary of what your video is going to be about!"
          onChange={handleSummaryChange}
          />
      </div>
    </div>
  )
}