import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';

import writing from '../../assets/writing-hand.png';
import studying from '../../assets/crystal-ball.png';
import laptop from '../../assets/laptop.png';
import videoEditing from '../../assets/movie-camera.png';
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
        <Card className={task == "writing" ? "taskCard active" : "taskCard"}>
            <CardActionArea onClick={event => handleTaskClick(0)}>
                <CardContent>
                    <img src={writing} className="taskImage"/>
                    <p className="taskText">Writing</p>
                </CardContent>
            </CardActionArea>
        </Card>
        <Card className={task == "studying" ? "taskCard active" : "taskCard"}>
            <CardActionArea onClick={event => handleTaskClick(1)}>
                <CardContent>
                    <img src={studying} className="taskImage"/>
                    <p className="taskText">Studying</p>
                </CardContent>
            </CardActionArea>
        </Card>
        <Card className={task == "programming" ? "taskCard active" : "taskCard"}>
            <CardActionArea onClick={event => handleTaskClick(2)}>
                <CardContent>
                    <img src={laptop} className="taskImage"/>
                    <p className="taskText">Programming</p>
                </CardContent>
            </CardActionArea>
        </Card>
        <Card className={task == "video editing" ? "taskCard active" : "taskCard"}>
            <CardActionArea onClick={event => handleTaskClick(3)}>
                <CardContent>
                    <img src={videoEditing} className="taskImage"/>
                    <p className="taskText">Video Editing</p>
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
    )
  }
