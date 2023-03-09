import React from 'react';
import './header.css';
import logoUrl from '../../assets/logoRed.png';
import {Link} from "react-router-dom";

window.onscroll = function() {myFunction()};
window.onload = function(){ 
  var burger = document.querySelector('.burgerContainer');
  var headerr = document.querySelector('.mobileHeaderContainer');
  burger.onclick = function() {myFunction2()};
  function myFunction2() {
    headerr.classList.toggle('menu-opened');
  }
}

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

    <div class="mobileHeader">
      <div class="mobileHeaderContainer">
        <Link to="/"><img className="mobileLogo" src={logoUrl} alt="ForceMeTo"/></Link>
          <div class="burgerContainer">
              <div id="burger">
                  <div class="bar topBar"></div>
                  <div class="bar btmBar"></div>
              </div>
          </div>
          <ul class="menu">
              <li class="menu-item"><a href="#">Home</a></li>
              <li class="menu-item"><a href="#">How it works</a></li>
              <li class="menu-item"><a href="#">Contact support</a></li>
              <li class="menu-item"><div className='navigationButton'>Force me to [write]</div></li>
          </ul>
      </div>
    </div>
  </div>

)
export default Header;
