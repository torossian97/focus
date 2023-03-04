import React from "react"
import '../App.css'
import './demo.css'

import { useSelector, useDispatch } from 'react-redux'

/* Features */
import Money from '../features/stakeInfo/Money'
import Deadline from '../features/stakeInfo/Deadline'
import CharitySelector from '../features/scrollSelector/CharitySelector'
import Tasks from '../features/taskInfo/tasks/Tasks'
import TaskSelector from '../features/taskInfo/TaskSelector'
import TaskTitle from '../features/taskInfo/TaskTitle'

/* Components */
import Header from '../components/header/Header'

const Demo = () => {
    const taskWritten = useSelector(state => state.taskInfo.taskWritten)

    return (
    <div className="App">
        <Header/>
        <div className="App-body">
            <div className='demo'>
                <div className="promptWrap"><h4 className="prompt">Force me to...</h4></div>
                <TaskTitle/>
                <TaskSelector/>
                <div className="promptWrap"><h4 className="prompt">{taskWritten}:</h4></div>
                <Tasks/>
                <div className="promptWrap"><h4 className="prompt">What's at stake?</h4></div>
                <Money/>
                <div className="promptWrap"><h4 className="prompt">When does this have to be done by?</h4></div>
                <Deadline/>
                <div className="promptWrap"><h4 className="prompt">Pick a charity:</h4></div>
                <CharitySelector/>
            </div>
        </div>
        </div>
    );
};
export default Demo