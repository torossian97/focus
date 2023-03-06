import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';

import writing from '../../assets/writing-hand.png';
import studying from '../../assets/notebook.png';
import laptop from '../../assets/laptop.png';
import videoEditing from '../../assets/movie-camera.png';
import design from '../../assets/design.png';
import './taskSelector.css';
import { setTaskTo } from './taskInfoSlice'

export default function TaskSelector() {
    const task = useSelector(state => state.taskInfo.taskWritten)
    const dispatch = useDispatch()
  
    const handleTaskClick = (newValue) => {
        dispatch(setTaskTo(newValue));
    };
  
    return (
    <div class="scrolling-wrapper-flexbox fade">
        <Card elevation={2} className={task === "writing" ? "taskCard active" : "taskCard"}>
            <CardActionArea onClick={event => handleTaskClick(0)}>
                <CardContent>
                    <img src={writing} className="taskImage"/>

                </CardContent>
            </CardActionArea>
        </Card>
        <Card elevation={2} className={task === "studying" ? "taskCard active" : "taskCard"}>
            <CardActionArea onClick={event => handleTaskClick(1)}>
                <CardContent>
                    <img src={studying} className="taskImage"/>

                </CardContent>
            </CardActionArea>
        </Card>
        <Card elevation={2} className={task === "programming" ? "taskCard active" : "taskCard"}>
            <CardActionArea onClick={event => handleTaskClick(2)}>
                <CardContent>
                    <img src={laptop} className="taskImage"/>

                </CardContent>
            </CardActionArea>
        </Card>
        <Card elevation={2} className={task === "video editing" ? "taskCard active" : "taskCard"}>
            <CardActionArea onClick={event => handleTaskClick(3)}>
                <CardContent>
                    <img src={videoEditing} className="taskImage"/>
                    {/*<p className="taskText">Video Edit</p>*/}
                </CardContent>
            </CardActionArea>
        </Card>
        <Card elevation={2} className={task === "designing" ? "taskCard active" : "taskCard"}>
            <CardActionArea onClick={event => handleTaskClick(4)}>
                <CardContent>
                    <img src={design} className="taskImage"/>
                    {/*<p className="taskText">Video Edit</p>*/}
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
    )
  }
