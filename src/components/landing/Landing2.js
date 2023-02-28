import React from 'react';
import './landing.css';
import landingImage from '../../assets/focu.png';
import crystalBall from '../../assets/crystal-ball.png';
import stopWatch from '../../assets/stopwatch.png';
import moneyBag from '../../assets/money-bag.png';
import heart from '../../assets/heart.png';
import landingArrow from '../../assets/arrow-down-icon.svg';

const Header = () => (
  <div className='landing'>
    <div className='landingPage'>
          <div className='landingPageHeader'>
            <div className="heading">
              <h1><span class="highlightRed">Break </span>your</h1>
              <h1><span class="highlightRed"> procrastination </span>cycle</h1>
              <h1><span class="highlightRed"> now.</span></h1>
            </div>
            <h6 className="hook">Moment is a simple, no sign-up tool to help you be productive on those
              really hard days, enabling custom financial incentives to be set. Research
              shows that “small wins” are the antidote to both short and long-term
              procrastination. Let’s get those wins.
            </h6>
          </div>
          <div className='landingPageText'>
          <h1>Break your procrastination cycle <span class="highlightRed">right now.</span></h1>
          <ol>
            <li>Define <span class="highlightRed">your task</span>
              <img className="emojiSmall" src={crystalBall}/>
            </li>
            <li>Set a <span class="highlightRed">deadline</span>
              <img className="emojiSmall" src={stopWatch}/>
            </li>
            <li>Put <span class="highlightRed">your money</span> on the line
              <img className="emojiSmall" src={moneyBag}/>
            </li>
            <li>Either do it, or <span class="highlightRed">lose it all</span> (to <span class="highlightRed">charity</span> 
              <img className="emojiSmall" src={heart}/> )
            </li>
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