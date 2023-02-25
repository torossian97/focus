import './App.css';
import * as React from 'react';
import Slider from '@mui/material/Slider';
import Counter from './features/counter/Counter';
import { useSelector, useDispatch } from 'react-redux'
import { setTo } from './features/counter/counterSlice'

function App() {

  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  const handleSliderChange = (event, newValue) => {
    dispatch(setTo(newValue));
  };

  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Slider
          aria-label="Temperature"
          value={count}
          defaultValue={count}
          onChange={handleSliderChange}
          color="secondary"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
