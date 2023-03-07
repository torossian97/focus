import React from 'react';
import './landing.css';
import {Helmet} from "react-helmet";

import landingArrow from '../../assets/landingTask.svg';
import landingImageOne from '../../assets/landingTime.svg';
import landingImageTwo from '../../assets/landingDenied.svg';
import landingImageThree from '../../assets/landingPay.svg';
import landingImageFour from '../../assets/landingSavings.svg';
import Form from '../form/Form';

const LandingPage = () => (
  <div className='landing'>
    <div className='landingPage'>
      <div className='landingPageHeader'>
        <div className="heading">
          <h1><span class="highlightRed">Break </span>your</h1>
          <h1><span class="highlightRed">procrastination </span>cycle</h1>
          <h1><span class="highlightRed">now.</span></h1>
        </div>
        <h6 className="hook">ForceMeTo is a simple, no sign-up tool to help you be productive on those
          really hard days, enabling custom financial incentives to be set. Research
          shows that “small wins” are the antidote to both short and long-term
          procrastination. Let’s get those wins.
        </h6>
      </div>
      <div className='landingPageForm'>
        <Form/>
      </div>
    </div>
    <div className='learnMore'>
      <h6>See how it works</h6>
      <img className="landingArrow" src={landingArrow} alt="Down arrow"/>
    </div>
    <div className="workingSection">
      <img className="landingImage" src={landingImageOne} alt="Person doing some tasks"/>
      <div className='textSection'>
        <h2>1. Lorem Ipsum</h2>
        <h6>Research
          shows that “small wins” are the antidote to both short and long-term
          procrastination. Let’s get those wins.</h6>
      </div>
    </div>
    <div className="workingSection">
     
      <div className='textSection'>
        <h2>2. Lorem Ipsum</h2>
        <h6>Research
          shows that “small wins” are the antidote to both short and long-term
          procrastination. Let’s get those wins.</h6>
      </div>
      <img className="landingImage" src={landingImageTwo} alt="Person doing some tasks"/>
    </div>
    <div className="workingSection">
      <img className="landingImage" src={landingImageThree} alt="Person doing some tasks"/>
      <div className='textSection'>
        <h2>3. Lorem Ipsum</h2>
        <h6>Research
          shows that “small wins” are the antidote to both short and long-term
          procrastination. Let’s get those wins.</h6>
    </div>
    </div>
    <div className="workingSection">
      
      <div className='textSection'>
        <h2>4. Lorem Ipsum</h2>
        <h6>Research
          shows that “small wins” are the antidote to both short and long-term
          procrastination. Let’s get those wins.</h6>
      </div>
      <img className="landingImage" src={landingImageFour} alt="Person doing some tasks"/>
    </div>

  </div>
)
export default LandingPage;
