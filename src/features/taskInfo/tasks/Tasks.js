import React from 'react'
import './tasks.css'
import stopwatch from '../../../assets/stopwatch.png'
import { useSelector, useDispatch } from 'react-redux'
import { TextField, Slider, Card, Select, MenuItem } from '@mui/material';
import { setWritingSummaryTo, setWordCountTo, setVideoLengthTo,
  setVcUsernameTo, setProgrammingSummaryTo, setDesignTypeTo } from '../taskInfoSlice'

export default function Tasks() {
  const task = useSelector(state => state.taskInfo.task)
  const videoLength = useSelector(state => state.taskInfo.videoLength)
  const designType = useSelector(state => state.taskInfo.designType)
  const designIndex = useSelector(state => state.taskInfo.designIndex)
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
  const handleDesignTypeChange = (event) => {
    dispatch(setDesignTypeTo(event.target.value));
  };

  return (
    <div className="taskContainer">
      <div className={task === 0 ? "task activeTask" : "task"}>
        <Card elevation={2} className="textFieldCardFull">
          <div className="textFieldCard">
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
          </div>
          <div className="innerCardColumnFull">
            <h6>What are you writing about?</h6>
            <TextField className="summaryBoxes"
              id="outlined-multiline-static"
              multiline
              rows={4}
              placeholder="An essay on the civil war outlining..."
              onChange={handleSummaryChange}
            />
          </div>
          <div className="innerCardColumnFull">
            <h6>I will submit::</h6>
            <p className="submissionList">📄 PDF of work</p>
          </div>
        </Card>
      </div>
      <div className={task === 1 ? "task activeTask" : "task"}>
        <Card elevation={2} className="textFieldCardFull">
        <div className="textFieldCard">
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
        </div>
          <div className="innerCardColumnFull">
            <h6>What is your problem set about?</h6>
            <TextField className="summaryBoxes"
              id="outlined-multiline-static"
              multiline
              rows={4}
              placeholder="Human anatomy, specifically thorax..."
              onChange={handleSummaryChange}
            />
          </div>
          <div className="innerCardColumnFull">
            <h6>I will submit::</h6>
            <p className="submissionList">📄 PDF of work</p>
          </div>
        </Card>
      </div>
      <div className={task === 2 ? "task activeTask" : "task"}>
        <Card elevation={2} className="textFieldCardFull">
          <div className="textFieldCard">
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
          </div>
          <div className="innerCardColumnFull">
            <h6>What are you programming?</h6>
            <TextField className="summaryBoxes"
              id="outlined-multiline-static"
              multiline
              rows={4}
              placeholder="A brief, general summary of what your PRs will be (think commit messages)."
              onChange={handleProgrammingSummaryChange}
            />
          </div>
          <div className="innerCardColumnFull">
            <h6>I will submit::</h6>
            <p className="submissionList">🔗 Link to repo</p>
          </div>
        </Card>
      </div>
      <div className={task === 3 ? "task activeTask" : "task"}>
        <Card elevation={2} className="textFieldCardFull">
          <div className="textFieldCard">
            <div className="innerCardColumnLeft">
              <h6 style={{fontWeight:800,fontStyle: 'italic', margin:"15px", marginLeft: "0px"}}>minimum length: </h6>
            </div>
            <div className="innerCardColumnRight">
              <h6 style={{fontWeight:400,fontStyle: 'italic', margin:"15px", marginLeft: "auto"}}>{videoLength} minute(s)</h6>
            </div>
          </div>
          <div className="taskSlider">
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
                color: "#E76F51",
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
          <div className="innerCardColumnFull">
            <h6>What is your video about?</h6>
            <TextField className="summaryBoxes"
              id="outlined-multiline-static"
              multiline
              rows={4}
              placeholder="My backpacking trip through asia!"
              onChange={handleSummaryChange}
            />
          </div>
          <div className="innerCardColumnFull">
            <h6>I will submit::</h6>
            <p className="submissionList">🔗 Link to video</p>
          </div>
        </Card>
      </div>
      <div className={task === 4 ? "task activeTask" : "task"}>
        <Card elevation={2} className="textFieldCardFull">
          <div className="textFieldCard">
            <div className="innerCardColumnLeft">
              <h6>Design Type</h6>
              <p style={{fontSize: "12px"}}>What are you going to be designing?</p>
            </div>
            <div className="innerCardColumnRight">
            <Select
              className="dropdown"
              labelId="design-select-label"
              id="design-select"
              value={designIndex}
              onChange={handleDesignTypeChange}
            >
                <MenuItem value={0}>👩‍🎨 UI Mockups</MenuItem>
                <MenuItem value={1}>🖋️ Typography</MenuItem>
                <MenuItem value={2}>📕 Publication Art</MenuItem>
            </Select>
            </div>
          </div>
          <div className="innerCardColumnFull">
            <h6>Tell us about your {designType}?</h6>
            <TextField className="summaryBoxes"
              id="outlined-multiline-static"
              multiline
              rows={4}
              placeholder="Designs for a web landing page for a financial company..."
              onChange={handleProgrammingSummaryChange}
            />
          </div>
          <div className="innerCardColumnFull">
            <h6>I will submit::</h6>
            <p className="submissionList">📄 PDF of work</p>
          </div>
        </Card>
      </div>
    </div>
  )
}