import React from "react"
import '../App.css'
import './demo.css'

/* Features */
import Money from '../features/stakeInfo/Money'
import Deadline from '../features/stakeInfo/Deadline'
import CharitySelector from '../features/scrollSelector/CharitySelector'
import WritingTask from '../features/taskInfo/tasks/WritingTask'
import TaskSelector from '../features/taskInfo/TaskSelector'
import TaskTitle from '../features/taskInfo/TaskTitle'

/* Components */
import Header from '../components/header/Header'

const Demo = () => {
    return (
    <div className="App">
        <Header/>
        <div className="App-body">
            <div className='demo'>
                <h1>Howdy!</h1>
                <TaskTitle/>
                <TaskSelector/>
                <WritingTask/>
                <Money/>
                <Deadline/>
                <CharitySelector/>
            </div>
        </div>
        </div>
    );
};
export default Demo