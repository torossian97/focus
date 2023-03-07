import React from "react";
import '../App.css';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import LandingPage from '../components/landing/Landing';

const Landing = () => {
  return (
    <div className="App">
      <Header/>
      <div className="App-body">
        <LandingPage/>
      </div>
      <Footer/>
    </div>
  );
};
export default Landing;