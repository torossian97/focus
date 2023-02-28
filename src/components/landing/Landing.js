import React from 'react';
import './landing.css';
import {Helmet} from "react-helmet";

import landingArrow from '../../assets/arrow-down-icon.svg';
import Form from '../form/Form';

const LandingPage = () => (
  <div className='landing'>
    <div className='landingPage'>
      <div className='landingPageHeader'>
        <div className="heading">
          <h1><span class="highlightRed">Break </span>your</h1>
          <h1><span class="highlightRed"> procrastination </span>cycle</h1>
          <h1><span class="highlightRed"> now.</span></h1>
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
      <h6>How it works.</h6>
      <img className="landingArrow" src={landingArrow} alt="Down arrow"/>
    </div>
  </div>
)
export default LandingPage;
