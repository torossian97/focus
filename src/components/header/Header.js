import React from 'react';
import './header.css';
import logoUrl from '../../asssets/logo.jpeg';
import laptopUrl from '../../asssets/laptop.png';
const Header = () => (
  <div className="header">
    <div className="logo">
        <img className="logo" src={logoUrl} alt="ForceMeTo"/>
    </div>
    <div className="navigation">
        <div className="navigationObject">
            <img className="emoji" src={laptopUrl} alt="Programming"/>
            <h3>Programming</h3>
        </div>
        <div className="navigationObject">
            <img className="emoji" src={laptopUrl} alt="Programming"/>
            <h3>Programming</h3>
        </div>
    </div>
  </div>
)
export default Header;