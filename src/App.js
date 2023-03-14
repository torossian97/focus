import './App.css';
import * as React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom";
 import Landing from "./pages";
 import Demo from "./pages/demo";
 import Submission from "./pages/Submission";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} key={Math.random()} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/submission" element={<Submission />} />
      </Routes>
    </Router>
  );
}

export default App;
