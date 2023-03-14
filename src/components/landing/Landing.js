import React from 'react';
import './landing.css';

import landingArrow from '../../assets/arrow-down-icon.svg';
import landingImageOne from '../../assets/addInfo.svg';
import landingImageTwo from '../../assets/reminder.svg';
import landingImageThree from '../../assets/card.svg';
import landingImageFour from '../../assets/loseAll.svg';
import landingMobileUser from '../../assets/mobileUser.svg';

const LandingPage = () => (
  <div className='landing'>
    <div className='landingPage'>
      <div className='landingPageHeader'>
        <div className="heading">
          <h1><span class="highlightRed">Break </span>your</h1>
          <h1><span class="highlightRed">procrastination </span>cycle</h1>
          <h1><span class="highlightRed">now.</span></h1>
        </div>
        <div className='landingPageHook'>
          <h4 className="hook">ForceMeTo is a simple, no sign-up tool to help you be productive on those
            really hard days, enabling custom financial incentives to be set. Research
            shows that “small wins” are the antidote to both short and long-term
            procrastination. Let’s get those wins.
          </h4>
          <img className="landingPageHeaderImage" src={landingMobileUser} alt="Person spending too much time on their phone procrastinating." />
        </div>
        <div className='navigationButtonLanding'>Try Force me to <span class="material-symbols-outlined">arrow_forward</span></div>
      </div>
      <div className='learnMore'>
        <h6>See how it works</h6>
        <img className="landingArrow" src={landingArrow} alt="Down arrow" />
      </div>
    </div>
    <div className='landingBody'>
      <div className="workingSection">
        <img className="landingImage" src={landingImageOne} alt="Person doing some tasks" />
        <div className='textSection'>
          <h2>1. Define your task</h2>
          <h6>Research
            shows that “small wins” are the antidote to both short and long-term
            procrastination. Let’s get those wins.</h6>
        </div>
      </div>
      <div className="workingSection">

        <div className='textSection'>
          <h2>2. Set a deadline</h2>
          <h6>Research
            shows that “small wins” are the antidote to both short and long-term
            procrastination. Let’s get those wins.</h6>
        </div>
        <img className="landingImage" src={landingImageTwo} alt="Person doing some tasks" />
      </div>
      <div className="workingSection">
        <img className="landingImage" src={landingImageThree} alt="Person doing some tasks" />
        <div className='textSection'>
          <h2>3. Put your money on the line</h2>
          <h6>Research
            shows that “small wins” are the antidote to both short and long-term
            procrastination. Let’s get those wins.</h6>
        </div>
      </div>
      <div className="workingSection">
        <div className='textSection'>
          <h2>4. Either do it, or lose it all</h2>
          <h6>Research
            shows that “small wins” are the antidote to both short and long-term
            procrastination. Let’s get those wins.</h6>
        </div>
        <img className="landingImage" src={landingImageFour} alt="Person doing some tasks" />
      </div>
    </div>
  </div>
)
export default LandingPage;
