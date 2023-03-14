import React from "react"
import '../App.css'
import './submission.css'

/* Features */

/* Components */
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer';

var payload = {
    "status": "active", // output: "example status"
    "taskId": "FQ7F64QI",
    "taskType": "Writing", 
    "email": "joe@outlook.com",
    "deadline": 1647240315000,
    "taskTitle": "a 5000 word paper about the theory of relativity in the tone of a monkey.",
    "money": 1000,
    "charity": "Red Cross"
  };

window.onload = function(){ 
    document.getElementById("status").innerHTML = payload.status;}


const Task = () => {

    
    return (
        <div className="App">
            <Header />
            <div className="App-body">
                <div className='submissionPage'>
                    <div className='submissionPageContents'>
                        <h1><span id="status" class="highlightRed"> </span>a 5000 word paper about the theory of relativity in the tone of a monkey.</h1> 
                        <h4 className="hook">You set your due date for: </h4>
                        <h4 className="hook">Thursday March 14 @ 9:30 am</h4>
                        <h4 className="hook">which means you have: </h4>
                        <div className="timeLeft">45:12:15</div>
                        <h4 className="hook">left.</h4>
                    </div>
                </div>
                <span class="loader"></span>
                <div className='submission'>
                    <div className='submitButton'>Submit my task</div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default Task