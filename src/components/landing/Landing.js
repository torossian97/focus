import React from 'react';
import './landing.css';
import landingImage from '../../assets/focu.png';
import landingArrow from '../../assets/arrow-down-icon.svg';
const Header = () => (
  <div className='landing'>
    <div className='landingPage'>
          <div className='landingPageImage'>
            <img className="landingImage" src={landingImage} alt="Procrastinator Sitting at his desk, unable to complete any work."/>
          </div>
          <div className='landingPageText'>
          <h1>Want to stop procrastinating <span class="highlightRed">right now?</span></h1>
          <ol>
            <li>Define <span class="highlightRed">your task</span></li>
            <li>Set a <span class="highlightRed">deadline</span></li>
            <li>Put <span class="highlightRed">your money</span> on the line</li>
            <li>Either do it, or <span class="highlightRed">lose it all</span> (to <span class="highlightRed">charity</span>)</li>
          </ol>
          </div>
        </div>
        <div className='learnMore'>
        <h6>No login required. Learn more below or start NOW above.</h6>
        <img className="landingArrow" src={landingArrow} alt="Down arrow"/>
    </div>
    </div>
)
export default Header;