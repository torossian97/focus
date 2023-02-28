import './App.css';
import * as React from 'react';
import Slider from '@mui/material/Slider';
import Counter from './features/counter/Counter';

import { useSelector, useDispatch } from 'react-redux'
import { setTo } from './features/counter/counterSlice'
import Header from './components/header/Header';
import LandingPage from './components/landing/Landing';

function App() {

  const count = useSelector(state => state.counter.value)
  const usage = useSelector(state => state.marketForm.usage)
  const dispatch = useDispatch()

  const handleSliderChange = (event, newValue) => {
    dispatch(setTo(newValue));
  };

  return (
    <div className="App">
      <Header/>
      <div className="App-body">
        <LandingPage/>
      </div>
    </div>
  );
}

export default App;
