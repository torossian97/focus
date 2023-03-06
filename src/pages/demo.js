import React from "react"
import '../App.css'
import './demo.css'

import { useSelector } from 'react-redux'
import { Button } from '@mui/material'

/* Features */
import Money from '../features/stakeInfo/Money'
import Deadline from '../features/stakeInfo/Deadline'
import CharitySelector from '../features/scrollSelector/CharitySelector'
import Tasks from '../features/taskInfo/tasks/Tasks'
import TaskSelector from '../features/taskInfo/TaskSelector'
import TaskTitle from '../features/taskInfo/TaskTitle'
import DropDown from '../features/taskInfo/DropDown'

/* Components */
import Header from '../components/header/Header'

const Demo = () => {
    const taskWritten = useSelector(state => state.taskInfo.taskWritten)

    return (
    <div className="App">
        <Header/>
        <div className="App-body">
            <div className='demo'>
                <div className="promptWrap"><p className="prompt">Force me to...</p></div>
                <DropDown/>
                <TaskSelector/>
                <div className="promptWrap"><p className="prompt">I'll be...</p></div>
                <TaskTitle/>
                <div className="promptWrap"><p className="prompt">My criteria includes</p></div>
                <Tasks/>
                <div className="promptWrap"><p className="prompt">What's at stake?</p></div>
                <Money/>
                <div className="promptWrap"><p className="prompt">When does this have to be done by?</p></div>
                <Deadline/>
                <div className="promptWrap"><p className="prompt">Pick a charity:</p></div>
                <CharitySelector/>
                <Button className="submitButton" variant="contained">Get Notified When We Launch!</Button>
            </div>
        </div>
        </div>
    );
};
export default Demo