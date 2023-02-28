import React from 'react';
import './header.css';
import logoUrl from '../../assets/logo.png';
const Header = () => (
  <div className="header">
    <div className="">
      <img className="logo" src={logoUrl} alt="ForceMeTo"/>
    </div>
    <div className="navigationObject">
      <h3>DEMO</h3>
    </div>
  </div>
)
export default Header;
