import React from 'react'
import './tasks.css'
import stopwatch from '../../../assets/stopwatch.png'
import { useSelector, useDispatch } from 'react-redux'
import { TextField, Slider, Card } from '@mui/material';
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
        <Card elevation={3} className="textFieldCard">
          <div className="innerCardColumnLeft">
            <h6>Word Count:</h6>
            <p style={{fontSize: "12px"}}>The absolute minimum amount of words you plan on typing.</p>
          </div>
          <div className="innerCardColumnRight">
            <TextField className="inputBoxes"
              fullWidth
              id="outlined-basic"
              label="Minimum"
              variant="outlined"
              onChange={handleWordCountChange}/>
          </div>
        </Card>
        <Card elevation={3} className="textFieldCard">
          <div className="innerCardColumnFull">
            <h6>What are you writing about?</h6>
            <TextField className="inputBoxes"
              id="outlined-multiline-static"
              label="Summary"
              multiline
              rows={4}
              placeholder="A brief summary of what you're going to write about!"
              onChange={handleSummaryChange}
            />
          </div>
        </Card>
      </div>
      <div className={task == 1 ? "task activeTask" : "task"}>
        <Card elevation={3} className="textFieldCard">
          <div className="innerCardColumnLeft">
            <h6>Number of problems</h6>
            <p style={{fontSize: "12px"}}>The minimum number of questions you plan on completing.</p>
          </div>
          <div className="innerCardColumnRight">
            <TextField className="inputBoxes"
              fullWidth
              id="outlined-basic"
              label="Problems"
              variant="outlined"
              onChange={handleWordCountChange}
            />
          </div>
        </Card>
        <Card elevation={3} className="textFieldCard">
          <div className="innerCardColumnFull">
            <h6>What is your problem set about?</h6>
            <TextField className="inputBoxes"
              id="outlined-multiline-static"
              label="Summary"
              multiline
              rows={4}
              placeholder="A brief summary of the problem set is about!"
              onChange={handleSummaryChange}
            />
          </div>
        </Card>
      </div>
      <div className={task == 2 ? "task activeTask" : "task"}>
        <Card elevation={3} className="textFieldCard">
          <div className="innerCardColumnLeft">
            <h6>Github/lab Username</h6>
            <p style={{fontSize: "12px"}}>Your Github/lab username, make sure your repo and account is public.</p>
          </div>
          <div className="innerCardColumnRight">
            <TextField className="inputBoxes"
              fullWidth
              id="outlined-basic"
              label="Github/lab username"
              variant="outlined"
              onChange={handleVcUsernameChange}
            />
          </div>
        </Card>
        <Card elevation={3} className="textFieldCard">
          <div className="innerCardColumnFull">
            <h6>What are you programming?</h6>
            <TextField className="inputBoxes"
              id="outlined-multiline-static"
              label="Summary"
              multiline
              rows={4}
              placeholder="A brief summary of what your PRs will be (think commit message)."
              onChange={handleProgrammingSummaryChange}
            />
          </div>
        </Card>
      </div>
      <div className={task == 3 ? "task activeTask" : "task"}>
        <Card elevation={3} className="sliderFieldCard">
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
              sx={{
                '.MuiSlider-thumb': {
                  backgroundImage: "url(" + stopwatch + ")",
                  width: "30px",
                  height: "40px",
                  paddingBottom: "5px",
                  backgroundColor: "#FFFFFF00",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  boxShadow: "none",
                  '&:focus, &:hover, &.Mui-active, &:before': {
                    boxShadow:
                      'none',
                    // Reset on touch devices, it doesn't add specificity
                    '@media (hover: none)': {
                      boxShadow: "none",
                    },
                  },
                }
              }}
              />
            </div>
          </div>
        </Card>
        <Card elevation={3} className="textFieldCard">
          <div className="innerCardColumnFull">
            <h6>What is your video about?</h6>
            <TextField className="inputBoxes"
              id="outlined-multiline-static"
              label="Summary"
              multiline
              rows={4}
              placeholder="A brief summary of what your video is going to be about!"
              onChange={handleSummaryChange}
            />
          </div>
        </Card>
      </div>
    </div>
  )
}