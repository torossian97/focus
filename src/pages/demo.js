import React from "react"
import '../App.css'
import './demo.css'

/* Features */
import Money from '../features/money/Money'
import Deadline from '../features/deadline/Deadline'
import CharitySelector from '../features/scrollSelector/CharitySelector'
import TaskSelector from '../features/scrollSelector/TaskSelector'

/* Components */
import Header from '../components/header/Header'

const Demo = () => {
    return (
    <div className="App">
        <Header/>
        <div className="App-body">
            <div className='demo'>
                <h1>Howdy!</h1>
                <Money/>
                <Deadline/>
                <TaskSelector/>
                <CharitySelector/>
            </div>
        </div>
        </div>
    );
};
export default Demo