import React from "react";
import '../App.css';

import Header from '../components/header/Header';
import LandingPage from '../components/landing/Landing';

const Landing = () => {
  return (
    <div className="App">
      <Header/>
      <div className="App-body">
        <LandingPage/>
      </div>
    </div>
  );
};
export default Landing;