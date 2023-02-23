import './App.css';
import * as React from 'react';
import Slider from '@mui/material/Slider';

function App() {

  const [value, setValue] = React.useState(
    30,
  );

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  return (
    <div className="App">
      <header className="App-header">
        <Slider
          aria-label="Temperature"
          defaultValue={30}
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
