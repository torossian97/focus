import React from 'react';
import './header.css';
import logoUrl from '../../assets/forcemeto.svg';
import {Link} from "react-router-dom";

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("divider").className = "headerScrolled";
  } else {
    document.getElementById("divider").className = "headerScrolledHidden";
  }
}

const Header = () => (
  <div className="header">
    <div className="headerContents">
    <Link to="/"><img className="logo" src={logoUrl} alt="ForceMeTo"/></Link>
    <div className='headerNavigation'>
      <div className='headerNavigationLeft'> 
        </div>
        <div className='headerNavigationRight'>
        <div className="navigationObject">
          <Link to="/">Home</Link>
        </div>
        <div className="navigationObject">
          <Link to="/">How it works</Link>
        </div>
        <div className='headerDivider'></div>
        <div className="navigationObject">
          <Link to="/demo">Contact support</Link>
        </div>
        
        <div className='navigationButton'>Force me to [write]</div>
      </div>
    </div>
    
  </div>
  <div id="divider"></div>
  </div>
)
export default Header;
